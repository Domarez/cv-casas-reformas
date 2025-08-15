import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Renovación de cocina moderna" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-left">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Convertí tu hogar en el{" "}
            <span className="text-accent">espacio</span>{" "}
            que siempre soñaste
          </h1>
          
          <h2 className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl">
            Reformas integrales, baños y cocinas con diseño, eficiencia y cumplimiento total. 
            Ejecutamos tu obra sin demoras, con capital propio y sin pedir anticipos.
          </h2>
          
          <Button 
            variant="cta" 
            size="xl"
            className="text-lg shadow-accent"
          >
            Solicitá tu cotización sin compromiso
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-24 h-24 border-2 border-accent/30 transform rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-1/3 right-1/3 w-16 h-16 border border-accent/20 transform rotate-12 hidden lg:block"></div>
    </section>
  );
};

export default Hero;