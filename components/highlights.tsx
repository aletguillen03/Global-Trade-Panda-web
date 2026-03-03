import { Search, HandshakeIcon, FileCheck, Truck } from "lucide-react"

const cards = [
  {
    icon: Search,
    title: "Fábricas verificadas",
    description: "Búsqueda y validación",
  },
  {
    icon: HandshakeIcon,
    title: "Negociación y calidad",
    description: "Mejor precio + control de muestras",
  },
  {
    icon: FileCheck,
    title: "Aduana y trámites",
    description: "Clasificación y liberación",
  },
  {
    icon: Truck,
    title: "Entrega en Argentina",
    description: "Puerta a puerta, hasta tu depósito",
  },
]

const stats = [
  { value: "+75", label: "importaciones realizadas" },
  { value: "+20", label: "empresas trabajan con nosotros" },
]

export function Highlights() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* 2x2 grid on desktop, single column on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <card.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-3xl font-bold text-accent">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
