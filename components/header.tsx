"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

/** Editá solo estos dos números para cambiar el tamaño del logo */
const LOGO_SIZE_MOBILE = 45;  // px (reducido 20%)
const LOGO_SIZE_DESKTOP = 77; // px (reducido 20%)

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }


  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1.2 md:py-1.8">
          {/* Logo + Nombre */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Mobile */}
            <div
              className="relative md:hidden"
              style={{ width: LOGO_SIZE_MOBILE, height: LOGO_SIZE_MOBILE }}
            >
              <Image
                src="/images/Global_Trade_Panda_logo.png"
                alt="Logo Panda Global Trade"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Desktop */}
            <div
              className="relative hidden md:block"
              style={{ width: LOGO_SIZE_DESKTOP, height: LOGO_SIZE_DESKTOP }}
            >
              <Image
                src="/images/Global_Trade_Panda_logo.png"
                alt="Logo Panda Global Trade"
                fill
                className="object-contain"
                priority
              />
            </div>

            <h1 className="text-lg md:text-xl font-bold text-white">
              Panda Global Trade
            </h1>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("inicio")} 
              className="text-sm text-white hover:text-accent transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection("quienes-somos")} 
              className="text-sm text-white hover:text-accent transition-colors"
            >
              Quiénes Somos
            </button>
            <button 
              onClick={() => scrollToSection("proceso")} 
              className="text-sm text-white hover:text-accent transition-colors"
            >
              Nuestro proceso
            </button>
            <button 
              onClick={() => scrollToSection("preguntas")} 
              className="text-sm text-white hover:text-accent transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection("clientes-habituales")} 
              className="text-sm text-white hover:text-accent transition-colors"
            >
              Clientes Habituales
            </button>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => scrollToSection("contacto")}
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm px-4 py-2 whitespace-nowrap"
              data-cta
              aria-label="Solicitar cotización"
            >
              Solicitar cotización
            </Button>
          </div>
        </div>

        {/* Navegación Mobile intencionalmente removida para dejar solo marca y CTA */}
      </div>
    </header>
  )
}
