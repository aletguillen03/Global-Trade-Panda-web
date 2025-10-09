import type { ChatkitQuotePayload } from '@/lib/chatkit'

export type QuoteLeadPayload = ChatkitQuotePayload & {
  origen?: string
}

export async function persistQuoteLead(payload: QuoteLeadPayload) {
  const response = await fetch('/api/quote', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    let message = `Error ${response.status}`

    try {
      const data = (await response.json()) as { error?: string }
      if (data?.error) {
        message = data.error
      }
    } catch (error) {
      // Ignore JSON parse issues and fallback to generic message
    }

    throw new Error(message)
  }
}
