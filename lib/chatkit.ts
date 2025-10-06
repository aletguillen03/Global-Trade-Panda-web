export interface ChatkitQuotePayload {
  nombre_completo: string
  empresa: string
  email: string
  telefono: string
  consulta: string
  volumen_estimado: string
  [key: string]: unknown
}

type ChatkitForm = {
  submit?: (payload: unknown) => unknown
}

type ChatkitWindow = Window & {
  chatkit?: {
    submit?: (formName: string, payload: unknown) => unknown
    forms?: Record<string, ChatkitForm>
  }
}

export async function submitChatkitQuote(
  payload: ChatkitQuotePayload,
): Promise<void> {
  if (typeof window !== 'undefined') {
    const chatkitWindow = window as ChatkitWindow
    const quoteForm = chatkitWindow.chatkit?.forms?.quote
    if (quoteForm?.submit) {
      await Promise.resolve(quoteForm.submit(payload))
      return
    }

    const directSubmit = chatkitWindow.chatkit?.submit
    if (directSubmit) {
      await Promise.resolve(directSubmit('quote', payload))
      return
    }
  }

  console.info('[chatkit] quote payload fallback', payload)
}
