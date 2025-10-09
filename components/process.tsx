"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, DollarSign, AlertTriangle, RotateCcw } from "lucide-react"

export function Process() {
  const processSteps = [
    {
      id: 1,
      title: "Consulta Inicial",
      description: "Analizamos tus necesidades específicas y definimos los requisitos del producto que buscas importar.",
      icon: CheckCircle,
    },
    {
      id: 2,
      title: "Búsqueda de Fábrica / Producto",
      description: "Identificamos y evaluamos proveedores chinos confiables que cumplan con tus especificaciones de calidad y precio.",
      icon: CheckCircle,
    },
    {
      id: 3,
      title: "Cotización",
      description: "Obtienes cotizaciones detalladas con precios, términos de pago y condiciones comerciales transparentes.",
      icon: CheckCircle,
    },
    {
      id: 4,
      title: "Precio Aprobado",
      description: "Una vez que apruebas el precio, procedemos con la siguiente fase del proceso de importación.",
      icon: CheckCircle,
    },
    {
      id: 5,
      title: "Pedido de Muestras / Testeo de Calidad",
      description: "Solicitamos muestras del producto para realizar pruebas de calidad exhaustivas antes de la producción masiva.",
      icon: CheckCircle,
    },
    {
      id: 6,
      title: "Calidad Aprobada",
      description: "Después de verificar que las muestras cumplen con tus estándares, damos luz verde para la producción.",
      icon: CheckCircle,
    },
    {
      id: 7,
      title: "Confirmación Final de la Operación",
      description: "Realizamos la confirmación definitiva de todos los detalles de la operación, incluyendo especificaciones finales, cantidades y términos comerciales antes de proceder con la producción.",
      icon: CheckCircle,
    },
    {
      id: 8,
      title: "Gestión, Coordinación y Envío de Mercadería",
      description: "Coordinamos toda la logística de producción, empaque y envío desde China hasta tu destino final.",
      icon: CheckCircle,
    },
    {
      id: 9,
      title: "Liberación de la Mercadería y Entrega Final",
      description: "Gestionamos los trámites aduaneros y coordinamos la entrega final en tu almacén o punto de destino.",
      icon: CheckCircle,
    },
  ]

  const paymentMilestones = [
    {
      step: 7,
      title: "Pago del 50% de la Operación",
      description: "Primer pago después de la confirmación final de la operación",
    },
    {
      step: 8,
      title: "Pago del 50% Restante",
      description: "Pago final después de la gestión y coordinación del envío",
    },
  ]

  const deviations = [
    {
      title: "Precio Elevado",
      description: "Si el precio no se ajusta a tu presupuesto, regresamos a la búsqueda de fábricas alternativas para encontrar mejores opciones.",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      title: "Calidad No Esperada",
      description: "Si las muestras no cumplen con tus expectativas de calidad, reiniciamos el proceso de búsqueda para encontrar proveedores que cumplan tus estándares.",
      icon: RotateCcw,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ]

  return (
    <section id="proceso" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">
              Nuestro Proceso de Importación
            </h2>
            <p className="text-xl text-secondary text-pretty max-w-3xl mx-auto">
              Un proceso probado y transparente que te guía paso a paso desde la consulta inicial hasta la entrega final de tu mercadería.
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
                            <h3 className="text-xl font-semibold text-primary mb-2">
                              {step.title}
                            </h3>
                            <p className="text-secondary leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Badges de pago */}
                    {paymentMilestones.map((milestone) => {
                      if (milestone.step === step.id) {
                        return (
                          <div key={milestone.step} className="mt-4 ml-4">
                            <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                                <DollarSign className="h-4 w-4" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-green-800">
                                  {milestone.title}
                                </h4>
                                <p className="text-sm text-green-700">
                                  {milestone.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Sección de Desvíos */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-primary text-center mb-8">
              Posibles Desvíos del Proceso
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deviations.map((deviation, index) => (
                <Card 
                  key={index} 
                  className={`${deviation.bgColor} ${deviation.borderColor} border-2 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105`}
                  onClick={() => {
                    const step2Element = document.querySelector('[data-step="2"]')
                    if (step2Element) {
                      step2Element.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${deviation.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <deviation.icon className={`h-6 w-6 ${deviation.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-semibold ${deviation.color} mb-2`}>
                          {deviation.title}
                        </h4>
                        <p className="text-secondary leading-relaxed">
                          {deviation.description}
                        </p>
                        <p className="text-xs text-gray-500 mt-2 italic">
                          Haz clic para volver al paso 2
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                  Contáctanos hoy mismo y descubre cómo podemos ayudarte a importar desde China de manera segura y eficiente.
                </p>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => {
                    const contactSection = document.getElementById('contacto')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
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
