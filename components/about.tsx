import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart, Eye, Lightbulb } from "lucide-react"

export function About() {
  return (
    <section id="quienes-somos" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Intro */}
          <div className="mb-10">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-medium text-white mb-4 text-center">Quienes somos?</h3>
                <p className="text-lg text-gray-300 text-pretty max-w-5xl text-center">
                Somos especialistas en conectar empresas de Argentina con fábricas en China verificadas previamente.<br />
                Conocemos cada proceso, sus facilidades y dificultades, y contamos con el equipo para garantizar<br /> 
                calidad, seguridad y transparencia en todo el proceso.<br />
                <br />
                Amoldamos nuestro servicio para cubrir todas las necesidades del cliente y garantizar una operación exitosa,<br /> 
                consiguiendo un producto de excelente relacion precio calidad.

                </p>
              </CardContent>
            </Card>
          </div>

          {/* Nuestra Misión como card de ancho completo */}
          <div className="mb-10">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-medium text-white mb-4 text-center">Nuestra Misión</h3>
                <p className="text-lg text-gray-300 text-pretty max-w-5xl text-center">
                Facilitar el acceso de empresas argentinas a productos fabricados en China,<br /> 
                con el objetivo de mejorar la rentabilidad de la empresa o acelerar la rotación del producto. 
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Nuestros Valores */}
          <div>
            <h3 className="text-2xl font-medium text-white mb-8 text-center">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-orange-400" />
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">Confianza</h4>
                  <p className="text-sm text-gray-300">
                    Construimos relaciones duraderas basadas en la honestidad y el cumplimiento de nuestros compromisos.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-6 w-6 text-orange-400" />
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">Transparencia</h4>
                  <p className="text-sm text-gray-300">
                    Cada paso del proceso es claro y comunicado, sin sorpresas ni costos ocultos.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-orange-400" />
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">Compromiso</h4>
                  <p className="text-sm text-gray-300">
                    Cada importación es tratada con el máximo cuidado y profesionalismo, asegurando resultados que superen
                    las expectativas de nuestros clientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-orange-400" />
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">Innovación</h4>
                  <p className="text-sm text-gray-300">
                    Buscamos constantemente soluciones logísticas más eficientes y tecnológicamente avanzadas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
