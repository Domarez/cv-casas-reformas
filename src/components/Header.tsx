import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/20 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/7e7c2e06-6c09-4d0f-a2dc-5a95eb2e2995.png" 
              alt="Construir Valor" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Beneficios
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Preguntas
            </button>
            <a 
              href="https://forms.clickup.com/90131266734/f/2ky3vz5e-6513/FC1JLI4W0L2ZRZQF51"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="cta" 
                size="sm"
              >
                Solicitar Cotización
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-left text-foreground hover:text-accent transition-colors py-2"
              >
                Beneficios
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-accent transition-colors py-2"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-foreground hover:text-accent transition-colors py-2"
              >
                Preguntas
              </button>
              <a 
                href="https://forms.clickup.com/90131266734/f/2ky3vz5e-6513/FC1JLI4W0L2ZRZQF51"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="cta" 
                  size="sm"
                  className="self-start"
                >
                  Solicitar Cotización
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;