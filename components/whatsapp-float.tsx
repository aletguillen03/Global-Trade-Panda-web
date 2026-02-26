"use client"

import { useState, useEffect } from "react"

export function WhatsappFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const openWhatsApp = () => {
    const phoneNumber = "54937580087"
    const message = "Hola, me gustaría consultar sobre sus servicios de importación."
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <button
      onClick={openWhatsApp}
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 175.216 175.552"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="wa-grad" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#57d163" />
            <stop offset="1" stopColor="#23b33a" />
          </linearGradient>
        </defs>
        <path
          fill="#fff"
          d="M87.184 14.2A73.073 73.073 0 0 0 14.9 87.473a72.6 72.6 0 0 0 10.1 37.3L14.2 161.35l37.6-10.5a73.12 73.12 0 0 0 35.4 9.1h.1A73.158 73.158 0 0 0 87.184 14.2zm0 133.9a60.623 60.623 0 0 1-30.9-8.5l-2.2-1.3-22.8 6 6.1-22.3-1.4-2.3a60.714 60.714 0 0 1-9.3-32.3 60.786 60.786 0 0 1 102.3-44.3 60.786 60.786 0 0 1-41.8 104.9z"
        />
        <path
          fill="#fff"
          d="M126.8 102.733c-2.2-1.1-12.9-6.4-14.9-7.1s-3.5-1.1-4.9 1.1-5.7 7.1-6.9 8.5-2.6 1.6-4.8.5a60.211 60.211 0 0 1-17.8-11 66.6 66.6 0 0 1-12.3-15.3c-1.3-2.2-.1-3.4 1-4.5s2.2-2.6 3.3-3.8a14.762 14.762 0 0 0 2.2-3.7 4.1 4.1 0 0 0-.2-3.8c-.6-1.1-4.9-12-6.8-16.4-1.8-4.3-3.6-3.7-4.9-3.8h-4.2a8.074 8.074 0 0 0-5.8 2.7 24.386 24.386 0 0 0-7.6 18.2c0 10.7 7.8 21.1 8.9 22.5s15.4 23.5 37.3 33a125.093 125.093 0 0 0 12.4 4.6 30.03 30.03 0 0 0 13.8.9c4.2-.6 12.9-5.3 14.7-10.4s1.8-9.5 1.3-10.4-2.1-1.6-4.3-2.7z"
        />
      </svg>
    </button>
  )
}
