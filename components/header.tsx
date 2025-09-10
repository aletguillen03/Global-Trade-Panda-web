"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

/** Editá solo estos dos números para cambiar el tamaño del logo */
const LOGO_SIZE_MOBILE = 56;  // px
const LOGO_SIZE_DESKTOP = 96; // px

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header
      role="banner"
      className="group fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 py-2 md:py-3">
          {/* Logo + Nombre */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Mobile */}
            <div
              className="relative md:hidden"
              style={{ width: LOGO_SIZE_MOBILE, height: LOGO_SIZE_MOBILE }}
            >
              <Image
                src="/images/Global_Trade_Panda_logo.png"
                alt="Logo Global Trade Panda"
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
                alt="Logo Global Trade Panda"
                fill
                className="object-contain"
                priority
              />
            </div>

            <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
              Global Trade Panda
            </h1>
          </div>

          {/* CTA fijo desktop */}
          <div className="ml-auto hidden md:block">
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              data-cta
              aria-label="Solicitar cotización"
            >
              SOLICITAR COTIZACIÓN
            </Button>
          </div>

          {/* Botón mobile */}
          <div className="md:hidden ml-auto">
            <Button
              variant="ghost"
              size="sm"
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
              aria-controls="nav-mobile"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>
      </div>

      {/* NAV DESKTOP (sin CTA aquí) */}
      <nav
        aria-label="Navegación principal"
        className="
          pointer-events-none absolute left-0 right-0
          top-16 md:top-[104px]
          hidden max-h-0 overflow-hidden
          transition-all duration-300 ease-out
          group-hover:pointer-events-auto group-hover:max-h-28
          md:block
        "
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start gap-6 py-3">
            <button onClick={() => scrollToSection("inicio")} className="text-sm text-white hover:text-accent transition-colors">Inicio</button>
            <button onClick={() => scrollToSection("quienes-somos")} className="text-sm text-white hover:text-accent transition-colors">Quiénes Somos</button>
            <button onClick={() => scrollToSection("servicios")} className="text-sm text-white hover:text-accent transition-colors">Servicios</button>
            <button onClick={() => scrollToSection("preguntas")} className="text-sm text-white hover:text-accent transition-colors">FAQ</button>
            <button onClick={() => scrollToSection("testimonios")} className="text-sm text-white hover:text-accent transition-colors">Testimonios</button>
            <div className="ml-auto" />
          </div>
        </div>
      </nav>

      {/* NAV MOBILE */}
      {isMenuOpen && (
        <div id="nav-mobile" className="md:hidden">
          <div className="bg-black/50 px-2 pb-3 pt-2 sm:px-3">
            <button onClick={() => scrollToSection("inicio")} className="block w-full px-3 py-2 text-left text-white hover:text-accent transition-colors">Inicio</button>
            <button onClick={() => scrollToSection("quienes-somos")} className="block w-full px-3 py-2 text-left text-white hover:text-accent transition-colors">Quiénes Somos</button>
            <button onClick={() => scrollToSection("servicios")} className="block w-full px-3 py-2 text-left text-white hover:text-accent transition-colors">Servicios</button>
            <button onClick={() => scrollToSection("preguntas")} className="block w-full px-3 py-2 text-left text-white hover:text-accent transition-colors">FAQ</button>
            <button onClick={() => scrollToSection("testimonios")} className="block w-full px-3 py-2 text-left text-white hover:text-accent transition-colors">Testimonios</button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="mt-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              data-cta
              aria-label="Solicitar cotización"
            >
              SOLICITAR COTIZACIÓN
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}