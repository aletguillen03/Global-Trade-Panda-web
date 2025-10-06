'use client'

import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { submitChatkitQuote } from '@/lib/chatkit'
import { persistQuoteLead } from '@/lib/quotes'

const volumeOptions = [
  { value: 'menos_de_1_tonelada', label: 'Menos de 1 tonelada' },
  { value: '1_5_toneladas', label: 'Entre 1 y 5 toneladas' },
  { value: 'mas_de_5_toneladas', label: 'Más de 5 toneladas' },
  { value: 'a_un_cargar', label: 'A definir / Consultar' },
  { value: 'muestras', label: 'Sólo muestras' },
] as const

const quoteFormSchema = z.object({
  nombre_completo: z
    .string({ required_error: 'Ingresá tu nombre completo.' })
    .min(3, 'Ingresá tu nombre completo.'),
  empresa: z
    .string({ required_error: 'Ingresá el nombre de tu empresa.' })
    .min(2, 'Ingresá el nombre de tu empresa.'),
  email: z
    .string({ required_error: 'Ingresá un email válido.' })
    .email('Ingresá un email válido.'),
  telefono: z
    .string({ required_error: 'Ingresá un teléfono válido.' })
    .min(6, 'Ingresá un teléfono válido.'),
  consulta: z
    .string({ required_error: 'Contanos qué necesitás importar.' })
    .min(10, 'Contanos qué necesitás importar.'),
  volumen_estimado: z
    .string({ required_error: 'Seleccioná el volumen estimado.' })
    .min(1, 'Seleccioná el volumen estimado.'),
})

type QuoteFormValues = z.infer<typeof quoteFormSchema>

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const chatkitScriptUrl = useMemo(
    () => process.env.NEXT_PUBLIC_CHATKIT_WIDGET_URL,
    [],
  )

  useEffect(() => {
    if (!chatkitScriptUrl || typeof window === 'undefined') return

    const attribute = 'data-chatkit-widget'
    const existing = document.querySelector(
      `script[${attribute}="quote"]`,
    ) as HTMLScriptElement | null

    if (existing) return

    const script = document.createElement('script')
    script.src = chatkitScriptUrl
    script.async = true
    script.setAttribute(attribute, 'quote')
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [chatkitScriptUrl])

  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      nombre_completo: '',
      empresa: '',
      email: '',
      telefono: '',
      consulta: '',
      volumen_estimado: '',
    },
  })

  const onSubmit = async (values: QuoteFormValues) => {
    setStatus('loading')
    setErrorMessage(null)

    try {
      await persistQuoteLead({
        ...values,
        origen: 'website',
      })

      try {
        await submitChatkitQuote({
          ...values,
          origen: 'website',
        })
      } catch (chatkitError) {
        console.error('[chatkit] quote submission forwarding failed', chatkitError)
      }

      setStatus('success')
      reset()
    } catch (error) {
      console.error('[quote] submission failed', error)
      setStatus('error')
      setErrorMessage(
        error instanceof Error && error.message
          ? error.message
          : 'Ocurrió un problema al enviar tu mensaje. Intentá nuevamente.',
      )
    }
  }

  return (
    <section id="contacto" className="w-full px-4 py-16 md:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-2xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
          Contacto
        </h2>
        <p className="mt-2 text-center text-sm text-zinc-600">
          Contanos qué necesitás importar y te respondemos con una cotización y
          los próximos pasos.
        </p>

        <Card className="mt-8 border-zinc-200 shadow-lg">
          <CardHeader className="space-y-3 text-center">
            <CardTitle className="text-2xl font-bold text-[#da680c] dark:text-[#ff9200]">
              Solicitá tu cotización
            </CardTitle>
            <CardDescription className="text-base text-zinc-600">
              Completá este formulario para recibir un presupuesto personalizado
              para importar insumos o productos industriales desde China. Te
              responderemos en menos de 24h hábiles.
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <form
              className="flex flex-col gap-5"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-zinc-700"
                  htmlFor="nombre_completo"
                >
                  Nombre completo
                </label>
                <Input
                  id="nombre_completo"
                  placeholder="Tu nombre y apellido"
                  aria-invalid={errors.nombre_completo ? 'true' : 'false'}
                  {...register('nombre_completo')}
                />
                {errors.nombre_completo && (
                  <p className="text-sm text-rose-600">
                    {errors.nombre_completo.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-zinc-700"
                  htmlFor="empresa"
                >
                  Empresa u organización
                </label>
                <Input
                  id="empresa"
                  placeholder="Nombre de la empresa / organización"
                  aria-invalid={errors.empresa ? 'true' : 'false'}
                  {...register('empresa')}
                />
                {errors.empresa && (
                  <p className="text-sm text-rose-600">{errors.empresa.message}</p>
                )}
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-zinc-700"
                    htmlFor="email"
                  >
                    Email corporativo
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="usuario@empresa.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-sm text-rose-600">{errors.email.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-zinc-700"
                    htmlFor="telefono"
                  >
                    Teléfono / WhatsApp
                  </label>
                  <Input
                    id="telefono"
                    type="tel"
                    placeholder="Ej: +54 9 11 2345-6789"
                    aria-invalid={errors.telefono ? 'true' : 'false'}
                    {...register('telefono')}
                  />
                  {errors.telefono && (
                    <p className="text-sm text-rose-600">
                      {errors.telefono.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-zinc-700"
                  htmlFor="consulta"
                >
                  Contanos tu consulta
                </label>
                <Textarea
                  id="consulta"
                  rows={4}
                  placeholder="¿Qué producto o insumos querés importar? Detallá cantidades, especificaciones, destino, etc."
                  aria-invalid={errors.consulta ? 'true' : 'false'}
                  {...register('consulta')}
                />
                {errors.consulta && (
                  <p className="text-sm text-rose-600">
                    {errors.consulta.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-zinc-700"
                  htmlFor="volumen_estimado"
                >
                  Volumen estimado
                </label>
                <Select
                  id="volumen_estimado"
                  defaultValue=""
                  aria-invalid={errors.volumen_estimado ? 'true' : 'false'}
                  {...register('volumen_estimado')}
                >
                  <option value="" disabled>
                    Seleccioná el volumen
                  </option>
                  {volumeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
                {errors.volumen_estimado && (
                  <p className="text-sm text-rose-600">
                    {errors.volumen_estimado.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="mt-1 h-11"
                disabled={isSubmitting || status === 'loading'}
              >
                <Mail className="size-4" />
                {isSubmitting || status === 'loading'
                  ? 'Enviando...'
                  : 'Solicitar Cotización'}
              </Button>
            </form>

            {status === 'success' && (
              <p className="mt-4 rounded-md bg-emerald-50 p-3 text-sm text-emerald-700">
                ¡Gracias! Recibimos tu consulta y te contactaremos en menos de 24h
                hábiles.
              </p>
            )}

            {status === 'error' && (
              <p className="mt-4 rounded-md bg-rose-50 p-3 text-sm text-rose-700">
                {errorMessage}
              </p>
            )}
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs text-zinc-500">
          Usamos tus datos sólo para responder tu consulta. No compartimos tu
          información con terceros.
        </p>
      </div>
    </section>
  )
}
