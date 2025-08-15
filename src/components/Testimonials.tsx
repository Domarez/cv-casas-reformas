import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonialCouple from "@/assets/testimonial-couple.jpg";
import testimonialWoman from "@/assets/testimonial-woman.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Matías",
      location: "Boedo",
      image: testimonialCouple,
      text: "En una tormenta se nos voló todo el techo del quincho por un trabajo mal hecho previamente que nos hizo otra empresa. Reemplazaron toda la estructura y nos hicieron todo el techo nuevo. Trabajaron de forma excelente y muy prolijos, sobre todo porque es un segundo piso y tenían que subir todo por el frente con una roldana. Los recomiendo mucho."
    },
    {
      name: "Urquiza Evelyn",
      location: "Villa Urquiza",
      image: testimonialWoman,
      text: "Los contraté para hacer una reforma en el baño y en la cocina. En el baño quería sacar la bañera y hacer un box de ducha nuevo. Se encargaron de todo, desde el diseño hasta la entrega del baño terminado. En la cocina demolieron una pared divisoria porque yo quería un concepto abierto, se encargaron también de toda la parte eléctrica y tuvieron mucho cuidado con la mesada que les pedí que conserven. Hicieron todo el trabajo en 10 días, impecable."
    }
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
    ));
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ellos ya confiaron en nosotros
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 shadow-elegant border-0 bg-card/80 backdrop-blur">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars()}
              </div>
              
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="cta" size="xl">
            Quiero cotizar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;