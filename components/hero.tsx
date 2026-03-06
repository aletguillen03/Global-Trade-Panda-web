"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const openWhatsApp = () => {
    const phoneNumber = "5491138757285"
    const message = "Hola, me gustaría consultar sobre sus servicios de importación."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="inicio" className="relative min-h-[70vh] md:min-h-[75vh] flex items-center bg-black">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/shipping-port-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 md:pt-32 lg:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 tracking-tight text-balance">
            Importamos de China para tu empresa
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 md:mb-12 text-pretty text-orange-300 font-medium">
            Nos ocupamos de todo: fabricante, logística, aduana, entrega.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 shadow-lg"
            >
              Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8 py-4 border-2 border-white text-white bg-black/50 hover:bg-white hover:text-black transition-colors"
            >
              Conocer Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
