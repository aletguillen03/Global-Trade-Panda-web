import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "¿Cuál es el volumen mínimo para importar?",
      answer:
        "Trabajamos exclusivamente con importaciones comerciales. El volumen mínimo depende del tipo de producto, pero en general se trata de operaciones orientadas a empresas que buscan importar en cantidad para su actividad comercial o productiva.",
    },
    {
      question: "¿Qué tipo de productos pueden importar?",
      answer:
        "Podemos gestionar la importación de una amplia variedad de productos, incluyendo insumos industriales, electrónicos, químicos, productos terminados, materias primas, componentes, maquinaria y mercadería para distribución o fabricación. Evaluamos cada caso para asegurar su viabilidad técnica y comercial.",
    },
    {
      question: "¿Cuánto demora el proceso?",
      answer:
        "El plazo depende del tipo de producto, el proveedor y el método de transporte. En términos generales, el proceso completo suele demorar entre 80 y 150 días, incluyendo producción, transporte internacional, despacho aduanero y entrega final.",
    },
    {
      question: "¿Se encargan de toda la gestión?",
      answer:
        "Sí. Gestionamos el proceso completo: búsqueda y validación de proveedores, negociación, coordinación logística, documentación, despacho aduanero y entrega final en su empresa. Usted no necesita intervenir en las gestiones operativas.",
    },
    {
      question: "¿Necesito experiencia previa importando?",
      answer:
        "No. Nuestro servicio está diseñado para empresas que desean importar de forma segura, incluso si no tienen experiencia previa. Nos encargamos de todo el proceso y lo acompañamos en cada etapa.",
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
