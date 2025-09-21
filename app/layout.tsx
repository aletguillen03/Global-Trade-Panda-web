import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Panda Global Trade",
    template: "%s | Panda Global Trade",
  },
  description:
    "Agente integral de compras e importación desde China para empresas. Búsqueda de proveedores, negociación, control de calidad y logística puerta a puerta.",
  metadataBase: new URL("https://tudominio.com"),
  alternates: { canonical: "https://tudominio.com" },
  openGraph: {
    type: "website",
    url: "https://tudominio.com",
    title: "Panda Global Trade",
    description: "Gestión completa con foco en calidad, seguridad y cumplimiento.",
    images: ["/og.jpg"],
  },
  twitter: { card: "summary_large_image", site: "@tuusuario" },
  icons: { icon: [{ url: "/images/48x48-favicon.png", sizes: "48x48", type: "image/png" }], shortcut: "/images/48x48-favicon.png" },
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        {/* Inter + IBM Plex Mono vía Google Fonts (sin terminal) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {/* Skip link a11y */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-black focus:text-white focus:px-3 focus:py-2 focus:rounded-md"
        >
          Saltar al contenido
        </a>

        {children}

        <Suspense>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
