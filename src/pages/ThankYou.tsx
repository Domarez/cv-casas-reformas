import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <Card 
          className="p-12 shadow-elegant border-0 bg-card/90 backdrop-blur"
          data-aos="zoom-in"
        >
          <div 
            className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-8"
            data-aos="scale-in"
            data-aos-delay="200"
          >
            <CheckCircle className="w-10 h-10 text-accent-foreground" />
          </div>
          
          <h1 
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            ¡Gracias por confiar en nosotros!
          </h1>
          
          <p 
            className="text-xl text-muted-foreground leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Hemos recibido tu solicitud de cotización. Nuestro equipo la revisará 
            y te contactaremos pronto para comenzar a hacer realidad la transformación 
            de tu hogar.
          </p>
          
          <div 
            className="bg-accent/10 border-l-4 border-l-accent p-6 rounded-lg mb-8"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p className="text-lg text-foreground font-medium">
              📋 Próximos pasos:
            </p>
            <ul className="text-left text-muted-foreground mt-3 space-y-2">
              <li>• Te contactaremos en las próximas 24 horas</li>
              <li>• Coordinaremos una visita técnica gratuita</li>
              <li>• Recibirás un presupuesto detallado y personalizado</li>
            </ul>
          </div>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Link to="/">
              <Button variant="cta" size="lg" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Volver al inicio
              </Button>
            </Link>
            
            <Link to="/">
              <Button variant="ctaOutline" size="lg" className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                Ver más servicios
              </Button>
            </Link>
          </div>
        </Card>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-accent/20 transform rotate-45 hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border-2 border-accent/30 transform -rotate-12 hidden lg:block"></div>
      </div>
    </div>
  );
};

export default ThankYou;