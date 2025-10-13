import falconLogo from "@/assets/falcon-logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={falconLogo} 
                alt="Falcon Engineers Logo" 
                className="h-12 w-12 object-contain bg-white rounded-full p-1"
              />
              <span className="font-bold text-lg">Falcon Engineers</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Building excellence in construction since years. Your trusted partner for all civil engineering needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Location</h3>
            <p className="text-sm text-secondary-foreground/80">
              Chiplun, Ratnagiri<br />
              Maharashtra, India
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Falcon Engineers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
