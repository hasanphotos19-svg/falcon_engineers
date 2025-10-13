import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import falconLogo from "@/assets/falcon-logo.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark base overlay */}
        <div className="absolute inset-0 bg-black/80" />
        
        {/* Light beam from top left */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(ellipse 1200px 1000px at 0% 0%, hsl(45 100% 60% / 0.35) 0%, hsl(45 80% 50% / 0.2) 20%, transparent 50%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <img 
            src={falconLogo} 
            alt="Falcon Engineers Logo" 
            className="h-24 w-24 md:h-32 md:w-32 object-contain bg-white rounded-full p-2 shadow-strong"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in-up drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Falcon Engineers
        </h1>
        
        <p className="text-lg text-primary/90 mb-6 animate-fade-in-up animation-delay-100">
          Civil Contractors • Chiplun, Ratnagiri
        </p>
        
        <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Building Dreams with Precision & Excellence
        </p>
        
        <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
          Leading construction firm specializing in residential, commercial, and civil engineering projects across Maharashtra
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <Button 
            size="lg" 
            onClick={() => scrollToSection("contact")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong text-lg px-8"
          >
            Get Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection("projects")}
            className="border-primary/50 hover:bg-primary/20 hover:border-primary text-white text-lg px-8 backdrop-blur-sm"
          >
            View Projects
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
