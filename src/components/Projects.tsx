import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import retainingWall1 from "@/assets/retaining-wall-1.jpg";
import retainingWall2 from "@/assets/retaining-wall-2.jpg";
import plumbing1 from "@/assets/plumbing-1.jpg";
import plumbing2 from "@/assets/plumbing-2.jpg";
import tileWork1 from "@/assets/tile-work-1.jpg";
import tileWork2 from "@/assets/tile-work-2.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
  location: string;
  completionDate: string;
  clientType: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Retaining Wall Construction",
    category: "Structural",
    description: "Heavy-duty retaining wall systems for residential and commercial properties",
    images: [retainingWall1, retainingWall2],
    location: "Chiplun, Ratnagiri",
    completionDate: "2024",
    clientType: "Residential & Commercial",
    details: "Expert construction of durable retaining walls designed to prevent soil erosion and create level areas on sloped properties. Our retaining walls are engineered to withstand environmental pressures while enhancing property aesthetics. We use premium materials and proven construction techniques to ensure long-lasting stability and structural integrity."
  },
  {
    id: 2,
    title: "Professional Plumbing Services",
    category: "Infrastructure",
    description: "Complete plumbing solutions for new constructions and renovations",
    images: [plumbing1, plumbing2],
    location: "Chiplun, Ratnagiri",
    completionDate: "2024",
    clientType: "Residential & Commercial",
    details: "Comprehensive plumbing installation and maintenance services including water supply systems, drainage solutions, and sewage management. Our certified plumbers ensure code-compliant installations with quality materials and fixtures. We specialize in both residential and commercial projects, delivering reliable plumbing infrastructure that stands the test of time."
  },
  {
    id: 3,
    title: "Premium Tile Work",
    category: "Finishing",
    description: "High-quality tile installation for floors, walls, and decorative surfaces",
    images: [tileWork1, tileWork2],
    location: "Chiplun, Ratnagiri",
    completionDate: "2024",
    clientType: "Residential & Commercial",
    details: "Expert tile installation services featuring precise craftsmanship and attention to detail. We work with various tile types including ceramic, porcelain, marble, and granite. Our skilled artisans create stunning patterns and layouts that transform spaces while ensuring proper waterproofing and adhesion for long-lasting results. Perfect alignment and finishing are our hallmarks."
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleProjectClick = (project: Project, imageIndex: number) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
  };

  return (
    <>
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
              {projects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden hover:shadow-strong transition-all duration-300">
                    <div className="grid grid-cols-2 gap-2 p-2">
                      {project.images.map((image, imgIndex) => (
                        <div 
                          key={imgIndex}
                          className="relative h-48 overflow-hidden rounded-lg cursor-pointer"
                          onClick={() => handleProjectClick(project, imgIndex)}
                        >
                          <img 
                            src={image} 
                            alt={`${project.title} - Image ${imgIndex + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      ))}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {project.description}
                      </p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>📍 {project.location}</p>
                        <p>📅 {project.completionDate}</p>
                      </div>
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

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">{selectedProject.category}</Badge>
                  <Badge variant="outline">{selectedProject.clientType}</Badge>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`relative h-64 md:h-80 overflow-hidden rounded-lg ${
                        index === selectedImageIndex ? 'ring-2 ring-primary' : ''
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Project Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Details</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.details}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">{selectedProject.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Completion</p>
                      <p className="font-semibold">{selectedProject.completionDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Client Type</p>
                      <p className="font-semibold">{selectedProject.clientType}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
