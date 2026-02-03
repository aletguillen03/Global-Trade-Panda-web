import { NextResponse } from 'next/server'
import { z } from 'zod'
import { google } from 'googleapis'

const quotePayloadSchema = z.object({
  nombre: z.string().min(1),
  empresa: z.string().min(1),
  email: z.string().email(),
  telefono: z.string().min(1),
  consulta: z.string().min(1),
  origen: z.string().optional(),
})

// Rate limiting store (in-memory, resets on cold start)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5 // max 5 requests per minute per IP

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  return forwarded?.split(',')[0]?.trim() ?? realIp ?? 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  record.count++
  return false
}

async function getGoogleSheetsClient() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (!clientEmail || !privateKey) {
    throw new Error(
      'Faltan las variables de entorno GOOGLE_SHEETS_CLIENT_EMAIL o GOOGLE_SHEETS_PRIVATE_KEY.',
    )
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  return google.sheets({ version: 'v4', auth })
}

async function appendQuoteToSheet(payload: z.infer<typeof quotePayloadSchema>) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  const range = process.env.GOOGLE_SHEETS_QUOTE_RANGE ?? 'Hoja 1!A:G'

  if (!spreadsheetId) {
    throw new Error('Falta la variable de entorno GOOGLE_SHEETS_SPREADSHEET_ID.')
  }

  const sheets = await getGoogleSheetsClient()

  const values = [
    [
      new Date().toISOString(),
      payload.nombre,
      payload.empresa,
      payload.email,
      payload.telefono,
      payload.consulta,
      payload.origen ?? 'website',
    ],
  ]

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values },
  })

  if (response.status !== 200) {
    throw new Error(`No se pudo registrar la consulta en Sheets: ${response.statusText}`)
  }
}

export async function POST(request: Request) {
  // Rate limiting check
  const clientIp = getClientIp(request)
  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: 'Demasiadas solicitudes. Intentá nuevamente en un minuto.' },
      { status: 429 },
    )
  }

  let parsedBody: z.infer<typeof quotePayloadSchema>

  try {
    const json = await request.json()
    const parsed = quotePayloadSchema.safeParse(json)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos del formulario inválidos.', details: parsed.error.flatten() },
        { status: 400 },
      )
    }

    parsedBody = parsed.data
  } catch {
    return NextResponse.json({ error: 'No se pudo leer el cuerpo de la solicitud.' }, { status: 400 })
  }

  try {
    await appendQuoteToSheet(parsedBody)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[quote] error al guardar en Google Sheets', error)
    const message =
      error instanceof Error && error.message
        ? error.message
        : 'No se pudo registrar la consulta. Intentá nuevamente.'

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
