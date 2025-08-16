import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">
            ¡Gracias por tu interés!
          </h1>
          <p className="text-muted-foreground text-lg">
            Hemos recibido tu solicitud correctamente. Nos pondremos en contacto contigo pronto.
          </p>
        </div>

        <div className="space-y-4 pt-6">
          <p className="text-sm text-muted-foreground">
            Mientras tanto, puedes explorar más sobre nuestros servicios.
          </p>
          
          <Link to="/">
            <Button className="w-full">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;