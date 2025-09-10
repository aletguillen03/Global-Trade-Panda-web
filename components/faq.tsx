import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "¿Cuáles son los tiempos de entrega típicos?",
      answer:
        "Los tiempos varían según el producto y método de envío. Generalmente, el proceso completo toma entre 25-45 días: 7-15 días para producción, 15-25 días para envío marítimo, y 5-7 días para trámites aduaneros y entrega local. Para envíos urgentes, ofrecemos opciones aéreas que reducen el tiempo a 10-15 días.",
    },
    {
      question: "¿Cuál es el volumen mínimo de importación?",
      answer:
        "No tenemos un volumen mínimo estricto, pero recomendamos importaciones desde 1 CBM (metro cúbico) o $3,000 USD para optimizar costos. Para volúmenes menores, evaluamos cada caso individualmente y ofrecemos opciones de consolidación con otros clientes.",
    },
    {
      question: "¿Qué garantías ofrecen sobre la calidad de los productos?",
      answer:
        "Realizamos inspecciones de calidad en tres etapas: verificación del proveedor, inspección durante producción, y control pre-embarque. Ofrecemos garantía de reposición por defectos de fabricación y trabajamos solo con proveedores que cumplen nuestros estándares de calidad certificados.",
    },
    {
      question: "¿Cómo manejan los trámites aduaneros y documentación?",
      answer:
        "Nos encargamos de toda la documentación necesaria: facturas comerciales, listas de empaque, certificados de origen, y permisos especiales según el producto. Nuestro equipo especializado gestiona los trámites aduaneros y te mantenemos informado en cada paso del proceso.",
    },
    {
      question: "¿Qué costos adicionales debo considerar?",
      answer:
        "Nuestras cotizaciones incluyen todos los costos principales: producto, envío internacional, seguro, y trámites aduaneros. Los únicos costos adicionales serían impuestos locales (que varían por país) y entrega local si está fuera del área metropolitana. Siempre proporcionamos un desglose completo y transparente.",
    },
    {
      question: "¿Pueden ayudar con productos personalizados o con mi marca?",
      answer:
        "Sí, trabajamos con proveedores especializados en manufactura personalizada y private label. Podemos gestionar desde modificaciones simples hasta desarrollo completo de productos con tu marca, incluyendo diseño de packaging y cumplimiento de normativas específicas.",
    },
    {
      question: "¿Qué pasa si hay problemas con el proveedor o la mercancía?",
      answer:
        "Tenemos protocolos establecidos para resolver cualquier inconveniente. Mantenemos comunicación directa con proveedores, realizamos seguimiento constante, y en caso de problemas, gestionamos soluciones que pueden incluir reposición, reembolsos parciales, o búsqueda de proveedores alternativos.",
    },
    {
      question: "¿Ofrecen financiamiento o facilidades de pago?",
      answer:
        "Trabajamos con diferentes modalidades de pago para facilitar tu importación: pago contra entrega, cartas de crédito, y en casos especiales, financiamiento a corto plazo. Evaluamos cada solicitud individualmente según el historial y volumen de importación.",
    },
  ]

  return (
    <section id="preguntas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Preguntas Frecuentes</h2>
            <p className="text-xl text-secondary text-pretty">
              Resolvemos las dudas más comunes sobre nuestros servicios de importación. Si tienes otras preguntas, no
              dudes en contactarnos.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-primary hover:text-accent">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-secondary">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
