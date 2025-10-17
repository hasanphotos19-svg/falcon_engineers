import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import falconLogo from "@/assets/falcon-logo.jpg";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    if (path === "/") {
      navigate(path);
      if (sectionId) {
        setTimeout(() => scrollToSection(sectionId), 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  const navItems = [
    { name: "Services", path: "/", sectionId: "services" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "About", path: "/", sectionId: "about" },
    { name: "Contact", path: "/", sectionId: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigation("/")}>
            <img src={falconLogo} alt="Falcon Logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-xl font-bold text-foreground">Falcon Construction</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path, item.sectionId)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button onClick={() => handleNavigation("/", "contact")} size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background border-t">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path, item.sectionId)}
                className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => handleNavigation("/", "contact")}
                className="w-full"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
