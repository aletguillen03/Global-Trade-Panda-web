"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export function ContactInfo() {
  const [showWhatsappConfirm, setShowWhatsappConfirm] = useState(false)

  const handleWhatsapp = () => {
    setShowWhatsappConfirm(true)
  }

  const openWhatsapp = () => {
    const phoneNumber = "5493758008700"
    const message = "Hola, me gustaría consultar sobre vuestros servicios de importación."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
    setShowWhatsappConfirm(false)
  }

  return (
    <section id="info-contacto" className="w-full px-4 py-16 md:px-8 lg:px-12 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-12">Contacto</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-accent/10 rounded-full">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a
              href="mailto:globaltradepanda@gmail.com"
              className="text-accent hover:text-accent/80 transition-colors break-all"
            >
              globaltradepanda@gmail.com
            </a>
          </div>

          {/* Phone / WhatsApp */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-accent/10 rounded-full">
              <Phone className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
            <button onClick={handleWhatsapp} className="text-accent hover:text-accent/80 transition-colors font-medium">
              +54 9 3758-0087
            </button>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-accent/10 rounded-full">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Dirección</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Zarate 6154
              <br />
              San Martín
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
