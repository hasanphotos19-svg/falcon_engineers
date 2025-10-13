import { Building2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Falcon Engineering</span>
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
          <p>&copy; {new Date().getFullYear()} Falcon Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
