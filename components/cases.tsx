"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Ship, Box, Zap } from "lucide-react"

const cases = [
  {
    icon: Box,
    title: "Importación de Electrónica",
    company: "TechDistribuidora",
    description:
      "Importamos 5 contenedores de smartphones y accesorios electrónicos desde fabricantes en Shenzhen. Proceso: 12 semanas desde negociación hasta entrega en puerto de Buenos Aires.",
    result: "2,500 unidades importadas con márgenes del 35%",
  },
  {
    icon: Ship,
    title: "Maquinaria Industrial",
    company: "FabriTex S.A.",
    description:
      "Adquisición de maquinaria textil especializada de proveedores en Jiangsu. Coordinamos fabricación, certificaciones técnicas y logística de carga proyectada.",
    result: "3 máquinas hiladores entregadas en la planta",
  },
  {
    icon: Zap,
    title: "Materias Primas para Manufactura",
    company: "PlasticsInc",
    description:
      "Importación continua de resinas termoplásticas y aditivos químicos. Manejamos contenedores regulares con negociación de mejores precios por volumen.",
    result: "Reducción de 18% en costos de materia prima",
  },
]

export function Cases() {
  return (
    <section id="casos-estudio" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Casos de exito</h2>
            <p className="text-lg text-gray-300 text-pretty max-w-4xl mx-auto">
              Ejemplos reales de cómo hemos ayudado a empresas a optimizar sus importaciones desde China
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-min">
              {cases.map((caseItem) => (
                <Card key={caseItem.title} className="flex-shrink-0 w-full sm:w-96 bg-gray-900 border-gray-700">
                  <CardContent className="p-6 flex flex-col gap-4 h-full">
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
