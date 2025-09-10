import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Users, Ship, FileCheck, Truck, Shield } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Search,
      title: "Búsqueda de Proveedores",
      description:
        "Identificamos y verificamos los mejores proveedores chinos para tus necesidades específicas, evaluando calidad, capacidad y confiabilidad.",
    },
    {
      icon: Users,
      title: "Negociación Especializada",
      description:
        "Nuestro equipo bilingüe negocia precios, términos y condiciones en tu nombre, asegurando las mejores condiciones comerciales.",
    },
    {
      icon: FileCheck,
      title: "Control de Calidad",
      description:
        "Inspecciones rigurosas en fábrica y pre-embarque para garantizar que los productos cumplan con tus especificaciones exactas.",
    },
    {
      icon: Ship,
      title: "Gestión Logística",
      description:
        "Coordinamos todo el proceso de envío, desde la recolección en fábrica hasta la entrega en tu almacén, optimizando tiempos y costos.",
    },
    {
      icon: Shield,
      title: "Trámites Aduaneros",
      description:
        "Gestionamos toda la documentación y procesos aduaneros, asegurando el cumplimiento de normativas locales e internacionales.",
    },
    {
      icon: Truck,
      title: "Entrega Final",
      description:
        "Coordinamos la distribución local hasta tu almacén, incluyendo seguimiento en tiempo real y confirmación de entrega.",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">Nuestros Servicios</h2>
            <p className="text-xl text-secondary text-pretty max-w-3xl mx-auto">
              Te acompañamos en cada etapa del proceso de importación, desde la identificación del proveedor hasta la
              entrega en tu almacén. Un servicio integral que elimina las complejidades de importar desde China.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card p-8 rounded-lg border border-border">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Proceso Completo de Importación</h3>
              <p className="text-lg text-secondary mb-8 text-pretty">
                Desde el primer contacto hasta la entrega final, nos encargamos de todo para que tú puedas enfocarte en
                hacer crecer tu negocio. Nuestro proceso probado garantiza resultados exitosos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold mb-2">
                    1
                  </div>
                  <p className="text-sm font-medium text-primary">Consulta Inicial</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold mb-2">
                    2
                  </div>
                  <p className="text-sm font-medium text-primary">Búsqueda & Cotización</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold mb-2">
                    3
                  </div>
                  <p className="text-sm font-medium text-primary">Gestión & Envío</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold mb-2">
                    4
                  </div>
                  <p className="text-sm font-medium text-primary">Entrega Final</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
