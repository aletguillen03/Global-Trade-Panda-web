import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      company: "Distribuidora Industrial del Norte",
      content:
        "ImportChina Pro transformó nuestra cadena de suministro. En 18 meses hemos realizado 12 importaciones exitosas, reduciendo costos en un 35% y mejorando la calidad de nuestros productos. Su equipo es profesional y siempre está disponible.",
      rating: 5,
    },
    {
      name: "María Elena Rodríguez",
      company: "Textiles y Confecciones MER",
      content:
        "Después de una mala experiencia con otro proveedor, ImportChina Pro nos devolvió la confianza. Su proceso de control de calidad es excepcional y la comunicación constante nos da total tranquilidad. Altamente recomendados.",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      company: "Equipos Médicos Profesionales",
      content:
        "La gestión de documentación y trámites aduaneros es impecable. Como empresa del sector médico, necesitamos cumplir normativas estrictas y ellos se encargan de todo. Llevamos 3 años trabajando juntos sin problemas.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonios" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-gray-300 text-pretty">
              La confianza de nuestros clientes es nuestro mayor logro. Conoce las experiencias de empresas que han
              transformado sus operaciones con nuestros servicios de importación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-orange-400/30 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-pretty">"{testimonial.content}"</p>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                <p className="text-gray-300">Importaciones Exitosas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">98%</div>
                <p className="text-gray-300">Satisfacción del Cliente</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">5</div>
                <p className="text-gray-300">Años de Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
