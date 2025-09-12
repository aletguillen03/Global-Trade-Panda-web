import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "¿Cuáles son los tiempos de entrega típicos?",
      answer: ""
    },
    {
      question: "¿Cuál es el volumen mínimo de importación?",
      answer: ""
    },
    {
      question: "¿Qué garantías ofrecen sobre la calidad de los productos?",
      answer: ""
    },
    {
      question: "¿Cómo manejan los trámites aduaneros y documentación?",
      answer: ""
    },
    {
      question: "¿Qué costos adicionales debo considerar?",
      answer: "" 
    },
    {
      question: "¿Pueden ayudar con productos personalizados o con mi marca?",
      answer: ""
    },
    {
      question: "¿Qué pasa si hay problemas con el proveedor o la mercancía?",
      answer: ""
    },
    {
      question: "¿Ofrecen financiamiento o facilidades de pago?",
      answer: ""
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
