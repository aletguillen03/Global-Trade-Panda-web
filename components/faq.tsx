import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "¿No estoy dado de alta como importador. Puedo trabajar con ustedes?",
      answer:
        "Sí. No es necesario que estés inscripto como importador. Realizamos la importación bajo nuestra empresa y luego le facturamos a tu empresa con CUIT argentino. Si más adelante querés darte de alta, también podemos asesorarte y funcionar como brokers, pero no es un requisito para empezar.",
    },
    {
      question: "¿Cuánto cuesta el servicio? ¿Se cobra fijo, comisión o porcentaje?",
      answer:
        "El precio del servicio se define según la operación: puede ser una tarifa fija, comisión o porcentaje del valor de la operación, dependiendo del volumen y complejidad. Te damos una propuesta personalizada tras conocer tu proyecto.",
    },
    {
      question: "¿Qué tipos de productos, maquinaria o insumos puedo importar?",
      answer:
        "Importamos productos multirubro, maquinaria industrial y materias primas. Nos ajustamos a tus especificaciones técnicas, volúmenes y estándares de calidad.",
    },
    {
      question: "¿Cuál es el monto mínimo para importar con ustedes?",
      answer:
        "El monto mínimo depende del tipo de producto, volumen y logística involucrada. Podemos adaptarnos a diferentes escalas, desde lotes pequeños hasta contenedores completos. Contactanos y evaluamos caso por caso.",
    },
    {
      question: "¿Trabajan solo con empresas o también con personas?",
      answer:
        "Nuestro servicio está principalmente orientado a empresas, distribuidores, fabricantes y proyectos mayoristas. Si sos emprendedor, también podemos analizar tu caso para ver si es viable.",
    },
    {
      question: "¿Cuánto tarda una importación desde que empieza el proceso hasta la entrega?",
      answer:
        "El plazo varía según producto, proveedor y logística. En general, un proceso completo puede tomar entre 8 y 16 semanas, considerando fabricación, trámites aduaneros y transporte. (Nota: Este es un estimado — se puede ajustar según cada operación)",
    },
    {
      question: "¿Puedo trabajar con mi propio despachante de aduana?",
      answer:
        "Sí. Nuestro servicio de Gestión de Broker está pensado precisamente para quienes ya tienen despachante propio y solo necesitan encontrar el proveedor adecuado en China.",
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
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
