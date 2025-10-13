import { Card, CardContent } from "@/components/ui/card";
import { Home, Building, Hammer, Ruler, HardHat, Pencil, Wrench, Zap } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes, villas, and apartment complexes built with quality craftsmanship and attention to detail"
  },
  {
    icon: Building,
    title: "Commercial Projects",
    description: "Office buildings, retail spaces, and commercial complexes designed for functionality and aesthetic appeal"
  },
  {
    icon: Hammer,
    title: "Civil Engineering",
    description: "Complete civil engineering services including structural design, planning, and execution"
  },
  {
    icon: Pencil,
    title: "Architectural Design",
    description: "Expert architectural services from our team of qualified architects for innovative and functional designs"
  },
  {
    icon: Ruler,
    title: "Project Planning",
    description: "Comprehensive project planning and management from concept to completion"
  },
  {
    icon: HardHat,
    title: "Site Development",
    description: "Land preparation, grading, and infrastructure development for construction projects"
  },
  {
    icon: Wrench,
    title: "Plumbing Services",
    description: "Professional plumbing installation, maintenance, and repair services for all types of projects"
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Complete electrical solutions including wiring, fixtures, and electrical system design and installation"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive contracting and building solutions with experienced civil engineers and architects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-4 md:p-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
