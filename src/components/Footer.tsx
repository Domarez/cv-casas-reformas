const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/9dfa3df1-77dd-468b-b1f4-6ebea06b7b8e.png" 
              alt="Construir Valor" 
              className="h-8 w-auto mr-3"
            />
            <div className="text-2xl font-bold">
              <span className="text-foreground">CONSTRUIR</span>
              <span className="text-accent ml-2">VALOR</span>
            </div>
          </div>
          <p className="text-muted-foreground">
            Transformando hogares con profesionalismo y calidad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;