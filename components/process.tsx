"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function Process() {
  const processSteps = [
    {
      id: 1,
      title: "Formulario de Importación",
      description:
        "Definimos producto, volumen, objetivo de costo y requisitos.",
      icon: CheckCircle,
    },
    {
      id: 2,
      title: "Búsqueda de proveedor",
      description:
        "Seleccionamos fábricas y comparamos opciones reales.",
      icon: CheckCircle,
    },
    {
      id: 3,
      title: "Muestras + negociación",
      description:
        "Validamos calidad y cerramos condiciones (precio, packaging, tiempos).",
      icon: CheckCircle,
    },
    {
      id: 4,
      title: "Logística + Aduana",
      description:
        "Coordinamos envío, documentación, clasificación y liberación.",
      icon: CheckCircle,
    },
    {
      id: 5,
      title: "Entrega final",
      description:
        "Recibís la mercadería en tu depósito / empresa.",
      icon: CheckCircle,
    },
  ]

  return (
    <section id="proceso" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">Proceso de Gestión Integral</h2>
            <p className="text-xl text-secondary text-pretty max-w-3xl mx-auto">
              Metodología comprobada y transparente, con trazabilidad y acompañamiento integral hasta la entrega final.
            </p>
          </div>

          {/* Timeline Principal */}
          <div className="relative">
            {/* Línea vertical del timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/20 hidden md:block"></div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={step.id} className="relative" data-step={step.id}>
                  {/* Número del paso */}
                  <div className="absolute left-0 top-0 w-10 h-10 md:w-16 md:h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm md:text-lg shadow-lg z-10">
                    {step.id}
                  </div>

                  {/* Contenido del paso */}
                  <div className="ml-14 md:ml-24">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <step.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                            <p className="text-secondary leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>


                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  ¿Listo para comenzar tu proceso de importación?
                </h3>
                <p className="text-lg text-secondary mb-6 max-w-2xl mx-auto">
                  Contáctanos hoy mismo y descubre cómo podemos ayudarte a importar desde China de manera segura y
                  eficiente.
                </p>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => {
                    const phoneNumber = "5491138757285"
                    const message = "Hola, me gustaría consultar sobre sus servicios de importación."
                    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
                  }}
                >
                  Iniciar Consulta
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
