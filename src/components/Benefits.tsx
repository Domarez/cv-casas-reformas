import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, CreditCard, Hammer } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Inicio inmediato",
      description: "ejecutamos en 24 hs con capital propio."
    },
    {
      icon: CreditCard,
      title: "Financiación a medida",
      description: "adaptamos el plan de pago según tus posibilidades."
    },
    {
      icon: Hammer,
      title: "Obra sin interrupciones",
      description: "cumplimos en contraturnos si es necesario y no pedimos anticipos."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Beneficios destacados
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 text-center shadow-soft hover:shadow-elegant transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {benefit.title}:
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="ctaOutline" size="xl">
            Quiero presupuestar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;