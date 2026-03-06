"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export function ContactInfo() {
  const [showWhatsappConfirm, setShowWhatsappConfirm] = useState(false)

  const handleWhatsapp = () => {
    setShowWhatsappConfirm(true)
  }

  const openWhatsapp = () => {
    const phoneNumber = "5491138757285"
    const message = "Hola, me gustaría consultar sobre sus servicios de importación."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
    setShowWhatsappConfirm(false)
  }

  return (
    <section id="info-contacto" className="w-full py-6 md:py-10 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto w-full max-w-4xl px-4">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-4 md:mb-6">Contacto</h2>

        {/* Horizontal scrollable container - centered, scrolls when overflows */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex flex-row items-center justify-center gap-3 md:gap-6 px-2 min-w-fit w-full">
            {/* Email - non-interactive text styled like phone */}
            <div className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 bg-white dark:bg-zinc-800 rounded-full shadow-sm border border-zinc-200 dark:border-zinc-700 whitespace-nowrap">
              <div className="p-1.5 md:p-2 bg-accent/10 rounded-full">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-accent" />
              </div>
              <span className="text-sm md:text-base text-foreground font-medium">
                globaltradepanda@gmail.com
              </span>
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-zinc-300 dark:bg-zinc-600" />

            {/* Phone / WhatsApp */}
            <button
              onClick={handleWhatsapp}
              className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 bg-white dark:bg-zinc-800 rounded-full shadow-sm border border-zinc-200 dark:border-zinc-700 hover:border-accent/50 hover:shadow-md transition-all group whitespace-nowrap"
            >
              <div className="p-1.5 md:p-2 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-accent" />
              </div>
              <span className="text-sm md:text-base text-foreground group-hover:text-accent transition-colors font-medium">
                +54 9 11 3875-7285
              </span>
            </button>

            {/* Divider */}
            <div className="h-5 w-px bg-zinc-300 dark:bg-zinc-600" />

            {/* Address */}
            <div className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 bg-white dark:bg-zinc-800 rounded-full shadow-sm border border-zinc-200 dark:border-zinc-700 whitespace-nowrap">
              <div className="p-1.5 md:p-2 bg-accent/10 rounded-full">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-accent" />
              </div>
              <span className="text-sm md:text-base text-foreground font-medium">
                Zárate 6154, San Martín
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Confirmation Popup */}
      {showWhatsappConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-2">Abrir WhatsApp</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">¿Deseas abrir WhatsApp para contactarnos?</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowWhatsappConfirm(false)}
                className="px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={openWhatsapp}
                className="px-4 py-2 rounded-md bg-accent hover:bg-accent/90 text-white transition-colors font-medium"
              >
                Abrir WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
