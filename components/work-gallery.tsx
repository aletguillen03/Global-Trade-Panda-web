"use client"

import Image from "next/image"

const galleryImages = [
  {
    src: "/images/gallery/work-1.jpeg",
    alt: "Descarga de contenedor con autoelevador",
  },
  {
    src: "/images/gallery/work-2.jpeg",
    alt: "Equipo Panda Global Trade en almacén",
  },
  {
    src: "/images/gallery/work-3.jpeg",
    alt: "Operación de descarga con grúa",
  },
  {
    src: "/images/gallery/work-4.jpeg",
    alt: "Reunión de negocios en feria comercial",
  },
  {
    src: "/images/gallery/work-5.jpeg",
    alt: "Visita a proveedor en China",
  },
]

export function WorkGallery() {
  return (
    <section className="py-12 md:py-16 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
          Nuestro Trabajo
        </h2>
      </div>

      {/* Horizontal scrolling gallery */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 min-w-max">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-64 h-48 md:w-80 md:h-60 lg:w-96 lg:h-72 rounded-lg overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint for mobile */}
      <div className="flex justify-center mt-6 md:hidden">
        <p className="text-xs text-zinc-500">Desliza para ver más</p>
      </div>
    </section>
  )
}
