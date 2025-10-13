import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import residentialImage from "@/assets/project-residential.jpg";
import commercialImage from "@/assets/project-commercial.jpg";
import planningImage from "@/assets/service-planning.jpg";

const projects = [
  {
    image: residentialImage,
    title: "Luxury Residential Complex",
    category: "Residential",
    description: "Modern residential development with premium amenities and contemporary design"
  },
  {
    image: commercialImage,
    title: "Corporate Office Building",
    category: "Commercial",
    description: "State-of-the-art commercial space with sustainable design features"
  },
  {
    image: planningImage,
    title: "Infrastructure Development",
    category: "Civil Engineering",
    description: "Comprehensive civil engineering and infrastructure projects"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence in every project we undertake
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="group overflow-hidden hover:shadow-strong transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:left-0 md:-translate-x-12" />
          <CarouselNext className="-right-4 md:right-0 md:translate-x-12" />
        </Carousel>
      </div>
    </section>
  );
};
