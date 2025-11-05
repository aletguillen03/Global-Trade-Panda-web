import { Card, CardContent } from "@/components/ui/card"
import { Building2, Factory, Layers, ShoppingCart, Users } from "lucide-react"

const clientSegments = [
  {
    icon: Building2,
    title: "Distribuidores en expansión",
    description: "Distribuidores que buscan escalar ventas y margen importando directamente.",
  },
  {
    icon: Layers,
    title: "Distribuidores en alerta",
    description: "Empresas que quieren evitar quedar fuera de la cadena por importadores directos.",
  },
  {
    icon: Users,
    title: "Importadores exigentes",
    description: "Empresas que buscan mejores fábricas, precios o condiciones en China.",
  },
  {
    icon: Factory,
    title: "Fabricantes",
    description: "Fabricantes que requieren insumos o materia prima importada para optimizar costos y calidad.",
  },
  {
    icon: ShoppingCart,
    title: "Emprendedores mayoristas",
    description: "Emprendedores que buscan importar productos terminados para revender.",
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
              Trabajamos con empresas, fabricantes y distribuidores que buscan importar productos, maquinaria o materias
              primas directamente de fábricas en China
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:justify-items-center lg:max-w-5xl lg:mx-auto">
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
              Si tu empresa encaja en estos perfiles, podemos diseñar un plan de importacion a medida. Ponete en
              contacto y lo hablamos juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
