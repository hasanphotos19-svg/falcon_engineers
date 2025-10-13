import { Card, CardContent } from "@/components/ui/card";
import { Home, Building, Hammer, Ruler, HardHat, Pencil } from "lucide-react";

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
    icon: Pencil,
    title: "Design & Consultation",
    description: "Architectural design services and expert consultation for your construction needs"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction and engineering solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
