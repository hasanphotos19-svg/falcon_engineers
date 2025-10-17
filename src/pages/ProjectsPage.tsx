import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Lightbulb } from "lucide-react";

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
    status: "ongoing"
  },
  {
    id: 2,
    title: "Sustainable Building Consultation",
    category: "consulting",
    description: "Green building certification and sustainability consulting for commercial complex",
    year: 2025,
    month: "March",
    location: "Chiplun, Ratnagiri",
    status: "ongoing"
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
    status: "completed"
  },
  {
    id: 4,
    title: "Corporate Office Building",
    category: "construction",
    description: "State-of-the-art commercial space with sustainable design features",
    year: 2024,
    month: "October",
    location: "Chiplun, Ratnagiri",
    status: "completed"
  },
  {
    id: 5,
    title: "Structural Engineering Assessment",
    category: "consulting",
    description: "Comprehensive structural analysis and retrofitting recommendations for heritage buildings",
    year: 2024,
    month: "August",
    location: "Chiplun, Ratnagiri",
    status: "completed"
  },
  {
    id: 6,
    title: "Retaining Wall Construction",
    category: "construction",
    description: "Heavy-duty retaining wall systems for residential and commercial properties",
    year: 2024,
    month: "June",
    location: "Chiplun, Ratnagiri",
    status: "completed"
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
    status: "completed"
  },
  {
    id: 8,
    title: "Premium Tile Work Installation",
    category: "construction",
    description: "High-quality tile installation for floors, walls, and decorative surfaces",
    year: 2023,
    month: "September",
    location: "Chiplun, Ratnagiri",
    status: "completed"
  },
  {
    id: 9,
    title: "Plumbing Infrastructure Project",
    category: "construction",
    description: "Complete plumbing solutions for new residential development",
    year: 2023,
    month: "May",
    location: "Chiplun, Ratnagiri",
    status: "completed"
  },
  {
    id: 10,
    title: "Cost Optimization Consulting",
    category: "consulting",
    description: "Value engineering and cost reduction strategies for construction projects",
    year: 2023,
    month: "March",
    location: "Chiplun, Ratnagiri",
    status: "completed"
  },
  // 2022 Projects
  {
    id: 11,
    title: "Commercial Plaza Construction",
    category: "construction",
    description: "Multi-story commercial plaza with retail and office spaces",
    year: 2022,
    month: "December",
    location: "Chiplun, Ratnagiri",
    status: "completed"
  },
  {
    id: 12,
    title: "Project Management Consultation",
    category: "consulting",
    description: "End-to-end project management services for industrial facility",
    year: 2022,
    month: "July",
    location: "Chiplun, Ratnagiri",
    status: "completed"
  },
  {
    id: 13,
    title: "Residential Villa Development",
    category: "construction",
    description: "Luxury villa construction with modern amenities and landscaping",
    year: 2022,
    month: "April",
    location: "Chiplun, Ratnagiri",
    status: "completed"
  },
  // 2021 Projects
  {
    id: 14,
    title: "Quality Assurance Consulting",
    category: "consulting",
    description: "Construction quality control and compliance monitoring services",
    year: 2021,
    month: "October",
    location: "Chiplun, Ratnagiri",
    status: "completed"
  },
  {
    id: 15,
    title: "Infrastructure Development",
    category: "construction",
    description: "Comprehensive civil engineering and infrastructure projects",
    year: 2021,
    month: "June",
    location: "Chiplun, Ratnagiri",
    status: "completed"
  },
  {
    id: 16,
    title: "Feasibility Study Services",
    category: "consulting",
    description: "Technical and financial feasibility analysis for proposed developments",
    year: 2021,
    month: "February",
    location: "Chiplun, Ratnagiri",
    status: "completed"
  },
  // 2020 Projects
  {
    id: 17,
    title: "Residential Apartment Complex",
    category: "construction",
    description: "Multi-family residential building with modern facilities",
    year: 2020,
    month: "November",
    location: "Chiplun, Ratnagiri",
    status: "completed"
  },
  {
    id: 18,
    title: "Design Consultation Services",
    category: "consulting",
    description: "Architectural and engineering design consultation for various projects",
    year: 2020,
    month: "August",
    location: "Chiplun, Ratnagiri",
    status: "completed"
  },
  {
    id: 19,
    title: "Foundation & Structural Work",
    category: "construction",
    description: "Deep foundation and structural work for commercial building",
    year: 2020,
    month: "March",
    location: "Chiplun, Ratnagiri",
    status: "completed"
  }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("construction");

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
                    
                    <Card className="hover:shadow-strong transition-shadow">
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
      </main>

      <Footer />
    </div>
  );
}
