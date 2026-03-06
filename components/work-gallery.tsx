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
    <section className="py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestro Trabajo
            </h2>
            <p className="text-lg text-gray-300 text-pretty max-w-2xl mx-auto">
              Imágenes de nuestras operaciones en China y Argentina
            </p>
          </div>

          {/* Horizontal scroll on mobile, flex-wrap on larger screens - matching Cases style */}
          <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:justify-center sm:flex-wrap sm:overflow-visible sm:pb-0 sm:gap-5">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-[75vw] max-w-[280px] aspect-[4/3] rounded-lg overflow-hidden snap-center sm:w-[calc(33%-1rem)] sm:max-w-[300px] sm:snap-align-none group border border-gray-700"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 75vw, 300px"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* Scroll indicator dots for mobile - matching Cases style */}
            <div className="flex justify-center gap-2 mt-4 sm:hidden">
              {galleryImages.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-gray-600" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
