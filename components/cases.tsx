"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Truck, Forklift, Bolt } from "lucide-react"

const cases = [
  {
    icon: Truck,
    title: "Distribucion",
    company: "TecnoLibertador",
    description:
      "Importamos 4 contenedores de Membrana PVC, Mallas Geotextiles, Tejidos Mosquiteros, Pistolas aplicadoras de siliconas, Rodillos Antigota y Guantes de Seguridad 3 fábricas involucradas, 2 ciudades.",
    result: "+20.000 unidades importadas con márgenes de entre 35 y 65%",
  },
  {
    icon: Forklift,
    title: "Maquinaria",
    company: "Deco & Style S.A",
    description:
      "Importamos 1 Centro de Mecanizado Vertical CNC, 1 Máquina Pulidora de Vidrio, 1 Mesa de Corte para Vidrio Laminado y 1 Ventosa para Grua..",
    result: "Viaje a China con fabricante para visitar fábrica de maquinaria, gestión integral de la importación",
  },
  {
    icon: Bolt,
    title: "Materias Primas para Manufactura",
    company: "DySPlast S.A",
    description:
      "Importamos entre 2/3 contenedores anuales de Polipropileno, Polietileno, Policarbonato y Nylon en pellets. clientes de hace 10 años",
    result: "Reducción de 21% en costos de materia prima",
  },
]

export function Cases() {
  return (
    <section id="casos-estudio" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Clientes Habituales</h2>
            <p className="text-lg text-gray-300 text-pretty max-w-4xl mx-auto">
              Trabajamos con empresas, fabricantes y distribuidores de múltiples industrias. Amplia variedad de productos, maquinaria y materias primas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-xs sm:max-w-none mx-auto">
              {cases.map((caseItem) => (
                <Card key={caseItem.title} className="bg-gray-900 border-gray-700">
                  <CardContent className="p-5 sm:p-6 flex flex-col gap-4 h-full">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <caseItem.icon className="h-6 w-6 text-orange-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{caseItem.title}</h3>
                      <p className="text-sm text-orange-400 mb-3">{caseItem.company}</p>
                      <p className="text-sm text-gray-300 leading-relaxed mb-4">{caseItem.description}</p>
                      <div className="pt-4 border-t border-gray-700">
                        <p className="text-sm font-semibold text-green-400">{caseItem.result}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              ¿Tenés un proyecto similar? Contactanos y analizamos las posibilidades de importación para tu empresa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
