import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-charcoal/90"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-8">
          ¿Listo para transformar tu casa?
        </h2>
        
        <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed">
          Hacelo fácil, rápido y con respaldo profesional.
        </p>
        
        <Button 
          variant="cta" 
          size="xl"
          className="text-lg shadow-accent hover:scale-105"
        >
          Solicitá tu cotización ahora
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent/20 transform rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-accent/30 transform -rotate-12 hidden lg:block"></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-accent/40 rounded-full hidden lg:block"></div>
    </section>
  );
};

export default FinalCTA;