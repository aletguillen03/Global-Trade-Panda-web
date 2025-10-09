import { Card, CardContent } from "@/components/ui/card"
import { Building2, Factory, Layers, ShoppingCart, Users } from "lucide-react"

const clientSegments = [
  {
    icon: Building2,
    title: "Distribuidores en expansión",
    description:
      "Empresas que buscan maximizar su rentabilidad y aumentar el volumen de ventas con productos líderes.",
  },
  {
    icon: Layers,
    title: "Distribuidores en alerta",
    description:
      "Negocios que ven cómo importadores y fabricantes empiezan a saltar la cadena de distribución tradicional.",
  },
  {
    icon: Users,
    title: "Importadores exigentes",
    description:
      "Equipos que aún no encuentran la fábrica con los mejores precios y condiciones en China.",
  },
  {
    icon: Factory,
    title: "Fabricantes en búsqueda",
    description:
      "Plantas que necesitan insumos o materia prima específica para mejorar calidad y reducir costos.",
  },
  {
    icon: ShoppingCart,
    title: "Emprendedores mayoristas",
    description:
      "Personas que quieren iniciar un negocio local con productos terminados importados al por mayor.",
  },
]

export function Clients() {
  return (
    <section id="clientes-habituales" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Clientes habituales</h2>
            <p className="text-xl text-gray-300 text-pretty max-w-4xl mx-auto">
              Trabajamos con compañías y emprendedores que necesitan importar con estructura profesional: desde
              distribuidores consolidados hasta fabricantes y nuevos proyectos mayoristas listos para escalar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientSegments.slice(0, 3).map((segment) => (
              <Card key={segment.title} className="h-full bg-gray-900 border-gray-700 text-left">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <segment.icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{segment.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{segment.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="hidden lg:block" aria-hidden />

            {clientSegments.slice(3).map((segment) => (
              <Card key={segment.title} className="h-full bg-gray-900 border-gray-700 text-left">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <segment.icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{segment.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{segment.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm">
              Si tu empresa o proyecto encaja en uno de estos perfiles, conversemos y diseñemos un plan de importación a
              medida.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
