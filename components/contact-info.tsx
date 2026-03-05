"use client"

import { Mail, Phone, MapPin } from "lucide-react"
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
    <section id="info-contacto" className="w-full px-4 py-8 md:py-12 md:px-8 lg:px-12 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-10">Contacto</h2>

        {/* Horizontal layout on mobile, grid on larger screens */}
        <div className="flex flex-row justify-center items-start gap-4 sm:gap-6 md:gap-8 flex-wrap md:flex-nowrap">
          {/* Email */}
          <a
            href="mailto:globaltradepanda@gmail.com"
            className="flex flex-col items-center text-center group min-w-0 flex-1 max-w-[120px] md:max-w-none"
          >
            <div className="mb-2 md:mb-3 p-2 md:p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
              <Mail className="h-5 w-5 md:h-6 md:w-6 text-accent" />
            </div>
            <h3 className="text-sm md:text-base font-semibold mb-1">Email</h3>
            <span className="text-xs md:text-sm text-accent group-hover:text-accent/80 transition-colors break-all leading-tight">
              globaltradepanda@gmail.com
            </span>
          </a>

          {/* Phone / WhatsApp */}
          <button
            onClick={handleWhatsapp}
            className="flex flex-col items-center text-center group min-w-0 flex-1 max-w-[120px] md:max-w-none"
          >
            <div className="mb-2 md:mb-3 p-2 md:p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
              <Phone className="h-5 w-5 md:h-6 md:w-6 text-accent" />
            </div>
            <h3 className="text-sm md:text-base font-semibold mb-1">WhatsApp</h3>
            <span className="text-xs md:text-sm text-accent group-hover:text-accent/80 transition-colors font-medium">
              +54 9 11 3875-7285
            </span>
          </button>

          {/* Address */}
          <div className="flex flex-col items-center text-center min-w-0 flex-1 max-w-[120px] md:max-w-none">
            <div className="mb-2 md:mb-3 p-2 md:p-3 bg-accent/10 rounded-full">
              <MapPin className="h-5 w-5 md:h-6 md:w-6 text-accent" />
            </div>
            <h3 className="text-sm md:text-base font-semibold mb-1">Dirección</h3>
            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-tight">
              Zarate 6154, San Martín
            </p>
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
