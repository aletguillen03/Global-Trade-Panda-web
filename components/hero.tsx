"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Shield, Truck } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative py-15 lg:py-24 min-h-[60vh] flex items-center bg-black">
      {/* Background image with overlay (se respeta tu ruta) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/shipping-port-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título más proporcionado */}
          <h1 className="text-5xl md:text-6xl text-white mb-6 tracking-tight text-balance">
            Importamos desde China para tu empresa
          </h1>

          {/* Subtítulo más liviano */}
          <p className="text-xl md:text-2xl mb-8 text-pretty text-orange-300 font-medium">
          Conectamos tu negocio con fabricas chinas.<br />
          Nos ocupamos de absolutamente toda la gestión,<br />
          desde la búsqueda del fabricante en China hasta la entrega final en tu depósito<br />
          garantizando calidad, seguridad y resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 shadow-lg"
            >
              Consultar
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

          {/* Trust indicators (idénticos; solo tipografía global aplica) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-orange-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Confianza Total</h3>
              <p className="text-gray-200">Más de 100 importaciones exitosas</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-orange-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Red Global</h3>
              <p className="text-gray-200">Proveedores Multirubro verificados en toda China</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-orange-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Logística Integral</h3>
              <p className="text-gray-200">De la fabrica a tu empresa sin complicaciones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
