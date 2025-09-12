import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Panda Global Trade</h3>
            <p className="text-primary-foreground/80 mb-4 text-pretty">
              Tu socio confiable para importaciones desde China. Conectamos tu empresa con los mejores proveedores
              asiáticos, garantizando calidad, seguridad y resultados exitosos en cada proceso.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contacto@globaltradepanda.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Búsqueda de Proveedores</li>
              <li>Control de Calidad</li>
              <li>Gestión Logística</li>
              <li>Trámites Aduaneros</li>
              <li>Negociación Especializada</li>
              <li>Entrega Final</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Quiénes Somos</li>
              <li>Nuestra Misión</li>
              <li>Valores</li>
              <li>Testimonios</li>
              <li>Casos de Éxito</li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Panda Global Trade. Todos los derechos reservados. | Especialistas en importaciones desde China para
            empresas latinoamericanas.
          </p>
        </div>
      </div>
    </footer>
  )
}
