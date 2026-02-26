"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  const openWhatsApp = () => {
    const phoneNumber = "54937580087"
    const message = "Hola, me gustaría solicitar una cotización para importar."
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <section className="py-16 md:py-20 bg-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Comience su importación hoy
          </h2>
          <p className="text-lg md:text-xl text-secondary mb-8">
            Analizamos su proyecto sin costo.
          </p>
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 shadow-lg"
          >
            Solicitar cotización
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
