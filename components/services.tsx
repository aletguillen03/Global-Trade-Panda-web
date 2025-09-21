import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Ship, Users } from "lucide-react"

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">Nuestros Servicios</h2>
            <p className="text-xl text-secondary text-pretty max-w-3xl mx-auto">
              Te acompañamos en cada etapa del proceso de importación, desde la identificación del proveedor hasta la
              entrega en tu almacén. Un servicio integral que elimina las complejidades de importar desde China.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            <Card className="w-full max-w-md h-full hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Ship className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary text-center">Gestión Integral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary text-center">
                  Nos ocupamos absolutamente de todo el proceso, desde la búsqueda del proveedor hasta la entrega final.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full max-w-md h-full hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary text-center">Gestión de Broker</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary text-center">
                  Nos encargamos de dar con el fabricante en China que cumpla todos los requisitos que estás necesitando.
                  <br />
                  (Idealmente pensado para empresas que ya tienen su despachante e importan pero no han dado aún con el
                  fabricante esperado, ya sea por cuestiones de precio o calidad.)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
