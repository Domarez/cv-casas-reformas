import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Problem */}
          <Card className="p-12 shadow-soft border-0 bg-card/80 backdrop-blur">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              ¿Por qué una reforma puede ser un dolor de cabeza?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sabemos que muchas veces las obras se convierten en procesos desgastantes: 
              falta de claridad, demoras, presupuestos que cambian y falta de respaldo legal. 
              En Construir Valor, cambiamos esa historia.
            </p>
            <p className="text-lg text-foreground font-medium">
              Nos ocupamos de todo para que vos solo te enfoques en disfrutar el resultado.
            </p>
          </Card>
          
          {/* Solution */}
          <Card className="p-12 shadow-elegant border-0 bg-accent/5 border-l-4 border-l-accent">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              ¿Cómo contribuye Construir Valor?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Contamos con equipo propio, capital inicial y gestión completa de habilitaciones, 
              seguros y documentación.
            </p>
            <p className="text-xl font-semibold text-accent mb-8">
              Cumplimos en tiempo, forma y calidad.
            </p>
            <Button variant="cta" size="lg">
              Contactar ahora
            </Button>
          </Card>
          
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;