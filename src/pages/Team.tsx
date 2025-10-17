import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Award, Briefcase } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  experience: string;
  specialization: string[];
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rajesh Patil",
    role: "Founder & Managing Director",
    department: "Leadership",
    experience: "15+ years",
    specialization: ["Project Management", "Business Development", "Strategic Planning"]
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Head of Construction",
    department: "Construction",
    experience: "12+ years",
    specialization: ["Civil Engineering", "Site Management", "Quality Control"]
  },
  {
    id: 3,
    name: "Amit Deshmukh",
    role: "Chief Consultant",
    department: "Consulting",
    experience: "10+ years",
    specialization: ["Structural Analysis", "Cost Optimization", "Technical Consulting"]
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    role: "Project Manager",
    department: "Construction",
    experience: "8+ years",
    specialization: ["Residential Projects", "Timeline Management", "Client Relations"]
  },
  {
    id: 5,
    name: "Vikram Naik",
    role: "Senior Engineer",
    department: "Construction",
    experience: "9+ years",
    specialization: ["Infrastructure", "Plumbing Systems", "MEP Coordination"]
  },
  {
    id: 6,
    name: "Anjali Rao",
    role: "Design Consultant",
    department: "Consulting",
    experience: "7+ years",
    specialization: ["Architectural Design", "Interior Planning", "Sustainability"]
  },
  {
    id: 7,
    name: "Suresh Pawar",
    role: "Site Supervisor",
    department: "Construction",
    experience: "11+ years",
    specialization: ["On-site Management", "Safety Compliance", "Team Coordination"]
  },
  {
    id: 8,
    name: "Meera Joshi",
    role: "Quality Assurance Manager",
    department: "Consulting",
    experience: "6+ years",
    specialization: ["Quality Control", "Standards Compliance", "Inspection Services"]
  }
];

export default function Team() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the professionals behind our success. Our experienced team brings expertise across construction and consulting services.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.id} className="group hover:shadow-strong transition-all">
                <CardContent className="p-6">
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-12 w-12 text-primary" />
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <Badge variant="secondary">{member.department}</Badge>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span className="text-sm">{member.experience} Experience</span>
                  </div>

                  {/* Specialization */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Briefcase className="h-4 w-4" />
                      Specialization
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.specialization.map((spec, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
