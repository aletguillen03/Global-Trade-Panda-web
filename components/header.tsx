"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

/** Editá solo estos dos números para cambiar el tamaño del logo */
const LOGO_SIZE_MOBILE = 45;  // px (reducido 20%)
const LOGO_SIZE_DESKTOP = 77; // px (reducido 20%)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
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
            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Abrir menú de navegación"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menú</span>
              <span
                className={`block h-0.5 w-5 transform transition-all ${
                  isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                } bg-white`}
              />
              <span
                className={`mt-1 block h-0.5 w-5 transition-opacity ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                } bg-white`}
              />
              <span
                className={`mt-1 block h-0.5 w-5 transform transition-all ${
                  isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                } bg-white`}
              />
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm px-4 py-2 whitespace-nowrap"
              data-cta
              aria-label="Consultar"
            >
              Consultar
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-40 bg-zinc-900/90 backdrop-blur-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="flex h-full flex-col gap-6 px-6 py-10 pt-28 text-white"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={() => handleNavigation("inicio")}
                className="text-base font-medium text-white transition-colors hover:text-accent"
              >
                Inicio
              </button>
              <button
                onClick={() => handleNavigation("quienes-somos")}
                className="text-base font-medium text-white transition-colors hover:text-accent"
              >
                Quiénes Somos
              </button>
              <button
                onClick={() => handleNavigation("proceso")}
                className="text-base font-medium text-white transition-colors hover:text-accent"
              >
                Nuestro proceso
              </button>
              <button
                onClick={() => handleNavigation("preguntas")}
                className="text-base font-medium text-white transition-colors hover:text-accent"
              >
                FAQ
              </button>
              <button
                onClick={() => handleNavigation("clientes-habituales")}
                className="text-base font-medium text-white transition-colors hover:text-accent"
              >
                Clientes Habituales
              </button>
              <div className="pt-2">
                <Button
                  onClick={() => handleNavigation("contacto")}
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Consultar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
