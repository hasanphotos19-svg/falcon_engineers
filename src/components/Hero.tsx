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
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary/70" />
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

        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          Falcon Engineers
        </h1>
        
        <p className="text-lg text-primary-foreground/90 mb-6 animate-fade-in-up animation-delay-100">
          Civil Contractors • Chiplun, Ratnagiri
        </p>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          Building Dreams with Precision & Excellence
        </p>
        
        <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
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
            className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground text-lg px-8"
          >
            View Projects
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
