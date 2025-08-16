import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import bathroomImage from "@/assets/bathroom-renovation.jpg";
import materialsImage from "@/assets/materials-detail.jpg";

const Services = () => {
  const services = [
    {
      title: "Reforma Integral",
      description: "Diseño + ejecución completa de tu casa. Sin intermediarios.",
      cta: "Solicitar presupuesto",
      image: null,
      featured: true
    },
    {
      title: "Baños y Cocinas",
      description: "Renovamos los espacios que más usás, con diseño de interiorismo y materiales de alta gama.",
      cta: "Ver inspiración",
      image: bathroomImage,
      featured: false
    },
    {
      title: "Servicios por ambiente y exteriores",
      description: "Reparaciones puntuales de ambientes: pintura, instalaciones, pisos, humedad.",
      cta: "Quiero renovar mi ambiente",
      image: materialsImage,
      featured: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-soft-beige/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Elegí el servicio que tu hogar necesita
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`p-8 shadow-soft hover:shadow-elegant transition-all duration-300 border-0 
                ${service.featured ? 'bg-gradient-accent text-accent-foreground lg:scale-105' : 'bg-card'}`}
              data-aos={service.featured ? "zoom-in" : "fade-up"}
              data-aos-delay={index * 200}
            >
              {service.image && (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-4 ${service.featured ? 'text-accent-foreground' : 'text-foreground'}`}>
                {service.title}
              </h3>
              
              <p className={`text-lg leading-relaxed mb-8 ${service.featured ? 'text-accent-foreground/90' : 'text-muted-foreground'}`}>
                {service.description}
              </p>
              
              <Button 
                variant={service.featured ? "default" : "ctaOutline"} 
                size="lg"
                className={service.featured ? "bg-accent-foreground text-accent hover:bg-accent-foreground/90" : ""}
              >
                {service.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;