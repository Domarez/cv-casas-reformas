import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Puedo financiar mi obra?",
      answer: "Sí, ofrecemos financiación adaptada a cada cliente."
    },
    {
      question: "¿Cuánto tiempo tarda la reforma?",
      answer: "Depende del proyecto. Una cocina, entre 2 y 4 semanas. Una reforma integral, desde 30 días."
    },
    {
      question: "¿Necesito estar en casa durante la obra?",
      answer: "No es necesario. Nos encargamos de todo, con supervisión diaria."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Preguntas frecuentes
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
              <AccordionTrigger className="text-left text-xl font-semibold text-foreground hover:text-accent transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground leading-relaxed pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;