import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createSign } from 'node:crypto'

const quotePayloadSchema = z.object({
  nombre: z.string().min(1),
  empresa: z.string().min(1),
  email: z.string().email(),
  telefono: z.string().min(1),
  consulta: z.string().min(1),
  origen: z.string().optional(),
})

const GOOGLE_OAUTH_TOKEN_URL = 'https://oauth2.googleapis.com/token'
const GOOGLE_SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets'

type GoogleTokenResponse = {
  access_token: string
  token_type: string
  expires_in: number
}

function base64UrlEncode(input: Buffer | string) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '')
}

async function getServiceAccountAccessToken() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (!clientEmail || !privateKey) {
    throw new Error(
      'Faltan las variables de entorno GOOGLE_SHEETS_CLIENT_EMAIL o GOOGLE_SHEETS_PRIVATE_KEY.',
    )
  }

  const now = Math.floor(Date.now() / 1000)
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  }

  const claims = {
    iss: clientEmail,
    scope: GOOGLE_SHEETS_SCOPE,
    aud: GOOGLE_OAUTH_TOKEN_URL,
    exp: now + 3600,
    iat: now,
  }

  const encodedHeader = base64UrlEncode(JSON.stringify(header))
  const encodedClaims = base64UrlEncode(JSON.stringify(claims))
  const unsignedToken = `${encodedHeader}.${encodedClaims}`

  const signer = createSign('RSA-SHA256')
  signer.update(unsignedToken)
  signer.end()
  const signature = base64UrlEncode(signer.sign(privateKey))

  const assertion = `${unsignedToken}.${signature}`

  const body = new URLSearchParams({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion,
  })

  const response = await fetch(GOOGLE_OAUTH_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`No se pudo obtener un token de acceso: ${errorText}`)
  }

  const data = (await response.json()) as GoogleTokenResponse
  return data.access_token
}

async function appendQuoteToSheet(payload: z.infer<typeof quotePayloadSchema>) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  const range = process.env.GOOGLE_SHEETS_QUOTE_RANGE ?? 'Leads!A:G'

  if (!spreadsheetId) {
    throw new Error('Falta la variable de entorno GOOGLE_SHEETS_SPREADSHEET_ID.')
  }

  const accessToken = await getServiceAccountAccessToken()

  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(
      range,
    )}:append`,
  )
  url.searchParams.set('valueInputOption', 'USER_ENTERED')

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

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`No se pudo registrar la consulta en Sheets: ${errorText}`)
  }
}

export async function POST(request: Request) {
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
  } catch (error) {
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
