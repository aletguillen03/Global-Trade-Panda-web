import { CheckCircle2, XCircle, Warehouse, Cog, TrendingUp, ShoppingBag, Store, PackageX } from "lucide-react"

const workWith = [
  {
    icon: Warehouse,
    title: "Distribuidores",
    description: "Compra directa de fabrica y mejor margen.",
  },
  {
    icon: Cog,
    title: "Fabricantes",
    description: "Insumos, componentes y productos terminados.",
  },
  {
    icon: TrendingUp,
    title: "Empresas",
    description: "Escalar y desarrollar nuevas lineas.",
  },
]

const dontWorkWith = [
  {
    icon: ShoppingBag,
    title: "Compras personales",
    description: "Uso individual o familiar.",
  },
  {
    icon: Store,
    title: "Consumo final",
    description: "Reventas o minoristas.",
  },
  {
    icon: PackageX,
    title: "Sin volumen comercial",
    description: "Proyectos sin escala empresarial.",
  },
]

export function TargetClients() {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-foreground mb-10 md:mb-14">
            Exclusivo para empresas que importan por volumen
          </h2>

          {/* Two columns grid - always side by side */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Left column - Trabajamos con */}
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 h-8 sm:h-auto">
                <CheckCircle2 className="h-4 w-4 sm:h-6 sm:w-6 text-green-600 shrink-0" />
                <h3 className="text-xs sm:text-xl font-semibold text-foreground whitespace-nowrap">Trabajamos con:</h3>
              </div>
              <div className="space-y-5 sm:space-y-5">
                {workWith.map((item, index) => (
                  <div key={item.title} className="flex items-start gap-2 sm:gap-4 min-h-[72px] sm:min-h-0">
                    <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-green-100">
                      <item.icon className="h-4 w-4 sm:h-6 sm:w-6 text-green-700" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs sm:text-base font-semibold text-foreground leading-tight">{item.title}</h4>
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-sm text-muted-foreground leading-snug">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - No trabajamos con */}
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 h-8 sm:h-auto">
                <XCircle className="h-4 w-4 sm:h-6 sm:w-6 text-red-600 shrink-0" />
                <h3 className="text-xs sm:text-xl font-semibold text-foreground whitespace-nowrap">No trabajamos con:</h3>
              </div>
              <div className="space-y-5 sm:space-y-5">
                {dontWorkWith.map((item, index) => (
                  <div key={item.title} className="flex items-start gap-2 sm:gap-4 min-h-[72px] sm:min-h-0">
                    <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-red-100">
                      <item.icon className="h-4 w-4 sm:h-6 sm:w-6 text-red-700" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs sm:text-base font-semibold text-foreground leading-tight">{item.title}</h4>
                      <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-sm text-muted-foreground leading-snug">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer divider and text */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-center text-base italic text-muted-foreground">
              Servicio enfocado en operaciones mayoristas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
