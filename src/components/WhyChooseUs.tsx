import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, DollarSign, Users, Lightbulb } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Cumplimiento legal garantizado",
      description: "seguros, facturación y habilitaciones incluidas."
    },
    {
      icon: DollarSign,
      title: "Presupuestos cerrados",
      description: "sin sorpresas a mitad de obra."
    },
    {
      icon: Users,
      title: "Equipo propio",
      description: "arquitectos, jefes de obra y mano de obra calificada."
    },
    {
      icon: Lightbulb,
      title: "Diseño y funcionalidad",
      description: "combinamos estética con soluciones reales."
    }
  ];

  return (
    <section className="py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Por qué Construir Valor?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 text-center shadow-soft hover:shadow-elegant transition-all duration-300 border-0 bg-card/60 backdrop-blur"
              data-aos="flip-up"
              data-aos-delay={index * 150}
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {feature.title}:
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <Button variant="cta" size="xl" className="shadow-accent">
            Cotizar ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;