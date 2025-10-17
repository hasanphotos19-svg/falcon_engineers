import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Building2, Lightbulb, MapPin, Calendar, CheckCircle2 } from "lucide-react";

type ProjectCategory = "construction" | "consulting";

interface TimelineProject {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  year: number;
  month: string;
  location: string;
  status: "completed" | "ongoing";
  detailedAddress: string;
  startDate: string;
  endDate?: string;
  images: string[];
  clientName: string;
  projectValue: string;
  keyFeatures: string[];
  teamSize: number;
}

const projectsData: TimelineProject[] = [
  // 2025 Projects
  {
    id: 1,
    title: "Smart City Infrastructure Development",
    category: "construction",
    description: "Large-scale urban infrastructure project including roads, utilities, and public facilities",
    year: 2025,
    month: "January",
    location: "Chiplun, Ratnagiri",
    status: "ongoing",
    detailedAddress: "Main Road, Near Municipal Corporation, Chiplun, Ratnagiri - 415605",
    startDate: "January 15, 2025",
    images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5", "https://images.unsplash.com/photo-1487958449943-2429e8be8625"],
    clientName: "Municipal Corporation",
    projectValue: "₹5.2 Crore",
    keyFeatures: ["Smart traffic management", "Underground utilities", "Pedestrian infrastructure", "LED street lighting"],
    teamSize: 25
  },
  {
    id: 2,
    title: "Sustainable Building Consultation",
    category: "consulting",
    description: "Green building certification and sustainability consulting for commercial complex",
    year: 2025,
    month: "March",
    location: "Chiplun, Ratnagiri",
    status: "ongoing",
    detailedAddress: "Station Road, Commercial Hub, Chiplun, Ratnagiri - 415605",
    startDate: "March 1, 2025",
    images: ["https://images.unsplash.com/photo-1497366216548-37526070297c", "https://images.unsplash.com/photo-1497366811353-6870744d04b2"],
    clientName: "Green Tech Developers",
    projectValue: "₹85 Lakhs",
    keyFeatures: ["LEED certification support", "Energy audit", "Sustainability planning", "Compliance documentation"],
    teamSize: 5
  },
  // 2024 Projects
  {
    id: 3,
    title: "Luxury Residential Complex",
    category: "construction",
    description: "Modern residential development with premium amenities and contemporary design",
    year: 2024,
    month: "December",
    location: "Chiplun, Ratnagiri",
    status: "completed",
    detailedAddress: "Taha Heights Area, Beside Prant Office, Chiplun, Ratnagiri - 415605",
    startDate: "March 10, 2024",
    endDate: "December 20, 2024",
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"],
    clientName: "Skyline Developers",
    projectValue: "₹3.8 Crore",
    keyFeatures: ["24 luxury apartments", "Swimming pool", "Gym & clubhouse", "Landscaped gardens"],
    teamSize: 18
  },
  {
    id: 4,
    title: "Corporate Office Building",
    category: "construction",
    description: "State-of-the-art commercial space with sustainable design features",
    year: 2024,
    month: "October",
    location: "Chiplun, Ratnagiri",
    status: "completed",
    detailedAddress: "IT Park Area, Near Highway, Chiplun, Ratnagiri - 415605",
    startDate: "May 5, 2024",
    endDate: "October 28, 2024",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", "https://images.unsplash.com/photo-1497366754035-f200968a6e72"],
    clientName: "TechCorp Solutions",
    projectValue: "₹4.5 Crore",
    keyFeatures: ["5-story building", "Central AC", "Solar panels", "Modern workspaces"],
    teamSize: 22
  },
  {
    id: 5,
    title: "Structural Engineering Assessment",
    category: "consulting",
    description: "Comprehensive structural analysis and retrofitting recommendations for heritage buildings",
    year: 2024,
    month: "August",
    location: "Chiplun, Ratnagiri",
    status: "completed",
    detailedAddress: "Old City Area, Heritage Zone, Chiplun, Ratnagiri - 415605",
    startDate: "August 1, 2024",
    endDate: "August 30, 2024",
    images: ["https://images.unsplash.com/photo-1503387762-592deb58ef4e", "https://images.unsplash.com/photo-1499856871958-5b9627545d1a"],
    clientName: "Heritage Conservation Society",
    projectValue: "₹45 Lakhs",
    keyFeatures: ["Structural integrity assessment", "Retrofitting design", "Heritage compliance", "Restoration planning"],
    teamSize: 4
  },
  {
    id: 6,
    title: "Retaining Wall Construction",
    category: "construction",
    description: "Heavy-duty retaining wall systems for residential and commercial properties",
    year: 2024,
    month: "June",
    location: "Chiplun, Ratnagiri",
    status: "completed",
    detailedAddress: "Hill View Area, Slope Region, Chiplun, Ratnagiri - 415605",
    startDate: "June 10, 2024",
    endDate: "June 25, 2024",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"],
    clientName: "Valley Estates",
    projectValue: "₹1.2 Crore",
    keyFeatures: ["200m retaining wall", "Drainage system", "Erosion control", "Landscaping integration"],
    teamSize: 12
  },
  // 2023 Projects
  {
    id: 7,
    title: "Urban Planning Consultation",
    category: "consulting",
    description: "Master planning and zoning consultation for mixed-use development",
    year: 2023,
    month: "November",
    location: "Chiplun, Ratnagiri",
    status: "completed",
    detailedAddress: "Development Zone, New City Area, Chiplun, Ratnagiri - 415605",
    startDate: "November 5, 2023",
    endDate: "November 28, 2023",
    images: ["https://images.unsplash.com/photo-1577495508048-b635879837f1", "https://images.unsplash.com/photo-1486718448742-163732cd1544"],
    clientName: "Metro Planners Ltd",
    projectValue: "₹65 Lakhs",
    keyFeatures: ["Master plan development", "Zoning analysis", "Regulatory compliance", "Community consultation"],
    teamSize: 6
  },
  {
    id: 8,
    title: "Premium Tile Work Installation",
    category: "construction",
    description: "High-quality tile installation for floors, walls, and decorative surfaces",
    year: 2023,
    month: "September",
    location: "Chiplun, Ratnagiri",
    status: "completed",
    detailedAddress: "Residential Colony, Phase 2, Chiplun, Ratnagiri - 415605",
    startDate: "September 12, 2023",
    endDate: "September 30, 2023",
    images: ["https://images.unsplash.com/photo-1600607687644-c7171b42498b", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"],
    clientName: "Luxury Homes Pvt Ltd",
    projectValue: "₹55 Lakhs",
    keyFeatures: ["Italian marble flooring", "Decorative wall tiles", "Bathroom finishing", "Kitchen backsplash"],
    teamSize: 8
  }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("construction");
  const [selectedProject, setSelectedProject] = useState<TimelineProject | null>(null);

  const filteredProjects = projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our journey from 2020 to 2025 across construction and consulting projects
            </p>

            {/* Category Buttons */}
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                onClick={() => setSelectedCategory("construction")}
                variant={selectedCategory === "construction" ? "default" : "outline"}
                size="lg"
                className="gap-2"
              >
                <Building2 className="h-5 w-5" />
                Construction
              </Button>
              <Button
                onClick={() => setSelectedCategory("consulting")}
                variant={selectedCategory === "consulting" ? "default" : "outline"}
                size="lg"
                className="gap-2"
              >
                <Lightbulb className="h-5 w-5" />
                Consulting
              </Button>
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8">
                {filteredProjects.map((project, index) => (
                  <div key={project.id} className="relative pl-20">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md" />
                    
                    <Card 
                      className="hover:shadow-strong transition-shadow cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                          <div>
                            <Badge variant={project.status === "ongoing" ? "default" : "secondary"} className="mb-2">
                              {project.status === "ongoing" ? "Ongoing" : "Completed"}
                            </Badge>
                            <h3 className="text-xl font-semibold text-foreground">
                              {project.title}
                            </h3>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">{project.year}</p>
                            <p className="text-sm text-muted-foreground">{project.month}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3">
                          {project.description}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          📍 {project.location}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold mb-4">{selectedProject.title}</DialogTitle>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant={selectedProject.status === "ongoing" ? "default" : "secondary"}>
                      {selectedProject.status === "ongoing" ? "Ongoing" : "Completed"}
                    </Badge>
                    <Badge variant="outline">{selectedProject.category}</Badge>
                  </div>
                </DialogHeader>

                <div className="space-y-6 mt-6">
                  {/* Image Gallery */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.images.map((image, index) => (
                      <div key={index} className="relative h-64 overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`${selectedProject.title} - ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Project Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-muted/30 rounded-lg">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Start Date</p>
                          <p className="font-semibold">{selectedProject.startDate}</p>
                        </div>
                      </div>
                      
                      {selectedProject.endDate && (
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">End Date</p>
                            <p className="font-semibold">{selectedProject.endDate}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Project Address</p>
                          <p className="font-semibold">{selectedProject.detailedAddress}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Client Name</p>
                        <p className="font-semibold">{selectedProject.clientName}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Project Value</p>
                        <p className="font-semibold text-primary">{selectedProject.projectValue}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Team Size</p>
                        <p className="font-semibold">{selectedProject.teamSize} Members</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
}
