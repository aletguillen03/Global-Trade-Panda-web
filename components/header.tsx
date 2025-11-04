"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

/** Editá solo estos dos números para cambiar el tamaño del logo */
const LOGO_SIZE_MOBILE = 38 // px (reducido 15% adicional)
const LOGO_SIZE_DESKTOP = 65 // px (reducido 15% adicional)

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 md:py-3">
          {/* Logo + Nombre */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Mobile */}
            <div className="relative md:hidden" style={{ width: LOGO_SIZE_MOBILE, height: LOGO_SIZE_MOBILE }}>
              <Image
                src="/images/Global_Trade_Panda_logo.png"
                alt="Logo Panda Global Trade"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Desktop */}
            <div className="relative hidden md:block" style={{ width: LOGO_SIZE_DESKTOP, height: LOGO_SIZE_DESKTOP }}>
              <Image
                src="/images/Global_Trade_Panda_logo.png"
                alt="Logo Panda Global Trade"
                fill
                className="object-contain"
                priority
              />
            </div>

            <h1 className="text-lg md:text-xl font-bold text-white">Panda Global Trade</h1>
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
              onClick={() => scrollToSection("clientes-habituales")}
              className="text-sm text-white hover:text-accent transition-colors"
            >
              Clientes Habituales
            </button>
            <button
              onClick={() => scrollToSection("preguntas")}
              className="text-sm text-white hover:text-accent transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("info-contacto")}
              className="text-sm text-white hover:text-accent transition-colors"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm px-4 py-2 whitespace-nowrap"
              data-cta
              aria-label="Consulta"
            >
              Consulta
            </Button>
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 hover:text-accent transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-white/10 py-3">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-sm text-white hover:text-accent transition-colors text-left px-2 py-1"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("quienes-somos")}
                className="text-sm text-white hover:text-accent transition-colors text-left px-2 py-1"
              >
                Quiénes Somos
              </button>
              <button
                onClick={() => scrollToSection("proceso")}
                className="text-sm text-white hover:text-accent transition-colors text-left px-2 py-1"
              >
                Nuestro proceso
              </button>
              <button
                onClick={() => scrollToSection("clientes-habituales")}
                className="text-sm text-white hover:text-accent transition-colors text-left px-2 py-1"
              >
                Clientes Habituales
              </button>
              <button
                onClick={() => scrollToSection("preguntas")}
                className="text-sm text-white hover:text-accent transition-colors text-left px-2 py-1"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("info-contacto")}
                className="text-sm text-white hover:text-accent transition-colors text-left px-2 py-1"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm px-4 py-2 mt-2"
                data-cta
                aria-label="Consulta"
              >
                Consulta
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
