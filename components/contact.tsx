'use client'

import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { submitChatkitQuote } from '@/lib/chatkit'
import { persistQuoteLead } from '@/lib/quotes'

const quoteFormSchema = z.object({
  nombre: z
    .string({ required_error: 'Ingresá tu nombre.' })
    .min(3, 'Ingresá tu nombre.'),
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
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      consulta: '',
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
              className="space-y-4"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="space-y-2">
                <label htmlFor="nombre" className="block text-base font-medium">
                  Nombre
                </label>
                <Input
                  id="nombre"
                  placeholder="Ingresa tu nombre"
                  className="border-gray-300 focus-visible:ring-gray-300 focus-visible:border-gray-400"
                  aria-invalid={errors.nombre ? 'true' : 'false'}
                  {...register('nombre')}
                />
                {errors.nombre && (
                  <p className="text-sm text-rose-600">{errors.nombre.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="empresa" className="block text-base font-medium">
                  Empresa
                </label>
                <Input
                  id="empresa"
                  placeholder="Nombre de empresa"
                  className="border-gray-300 focus-visible:ring-gray-300 focus-visible:border-gray-400"
                  aria-invalid={errors.empresa ? 'true' : 'false'}
                  {...register('empresa')}
                />
                {errors.empresa && (
                  <p className="text-sm text-rose-600">{errors.empresa.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-base font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Ingresa tu email"
                  className="border-gray-300 focus-visible:ring-gray-300 focus-visible:border-gray-400"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-sm text-rose-600">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="telefono" className="block text-base font-medium">
                  Número de teléfono
                </label>
                <Input
                  id="telefono"
                  type="tel"
                  placeholder="Ej: +54 11 1234 5678"
                  className="border-gray-300 focus-visible:ring-gray-300 focus-visible:border-gray-400"
                  aria-invalid={errors.telefono ? 'true' : 'false'}
                  {...register('telefono')}
                />
                {errors.telefono && (
                  <p className="text-sm text-rose-600">{errors.telefono.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="consulta" className="block text-base font-medium">
                  Consulta
                </label>
                <Textarea
                  id="consulta"
                  placeholder="Qué productos o insumos desearía importar"
                  className="border-gray-300 focus-visible:ring-gray-300 focus-visible:border-gray-400"
                  aria-invalid={errors.consulta ? 'true' : 'false'}
                  {...register('consulta')}
                />
                {errors.consulta && (
                  <p className="text-sm text-rose-600">{errors.consulta.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-4 inline-block rounded-md bg-orange-500 px-6 py-3 text-white hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-80"
                disabled={isSubmitting || status === 'loading'}
              >
                {isSubmitting || status === 'loading' ? 'Enviando...' : 'Enviar'}
              </button>
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
