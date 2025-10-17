import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { User, Award, Briefcase, Mail, Phone, Linkedin, GraduationCap } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  experience: string;
  specialization: string[];
  image?: string;
  email: string;
  phone: string;
  education: string;
  bio: string;
  achievements: string[];
  projectsCompleted: number;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rajesh Patil",
    role: "Founder & Managing Director",
    department: "Leadership",
    experience: "15+ years",
    specialization: ["Project Management", "Business Development", "Strategic Planning"],
    email: "rajesh.patil@falconeng.com",
    phone: "+91 98765 43210",
    education: "MBA, B.Tech in Civil Engineering",
    bio: "Rajesh founded Falcon Construction with a vision to deliver excellence in construction and consulting. With over 15 years of experience, he has led numerous landmark projects and built a reputation for quality and integrity in the industry.",
    achievements: [
      "Founded Falcon Construction in 2010",
      "Led projects worth over ₹50 Crores",
      "Excellence in Construction Award 2023",
      "Certified Project Management Professional (PMP)"
    ],
    projectsCompleted: 120,
    linkedin: "rajesh-patil"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Head of Construction",
    department: "Construction",
    experience: "12+ years",
    specialization: ["Civil Engineering", "Site Management", "Quality Control"],
    email: "priya.sharma@falconeng.com",
    phone: "+91 98765 43211",
    education: "M.Tech in Structural Engineering, B.E. Civil",
    bio: "Priya brings extensive expertise in managing large-scale construction projects. Her attention to detail and commitment to quality has made her an invaluable asset to our team.",
    achievements: [
      "Successfully delivered 85+ construction projects",
      "ISO 9001 Quality Management Certification",
      "Best Site Manager Award 2022",
      "Published research on sustainable construction"
    ],
    projectsCompleted: 85,
    linkedin: "priya-sharma-eng"
  },
  {
    id: 3,
    name: "Amit Deshmukh",
    role: "Chief Consultant",
    department: "Consulting",
    experience: "10+ years",
    specialization: ["Structural Analysis", "Cost Optimization", "Technical Consulting"],
    email: "amit.deshmukh@falconeng.com",
    phone: "+91 98765 43212",
    education: "M.E. in Structural Design, B.Tech Civil",
    bio: "Amit specializes in providing innovative solutions for complex engineering challenges. His analytical approach and technical expertise have helped clients optimize costs while maintaining quality.",
    achievements: [
      "Consultant for 60+ major projects",
      "Certified Structural Engineer",
      "Cost savings of ₹15 Crores for clients",
      "Speaker at National Engineering Conference"
    ],
    projectsCompleted: 60,
    linkedin: "amit-deshmukh"
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    role: "Project Manager",
    department: "Construction",
    experience: "8+ years",
    specialization: ["Residential Projects", "Timeline Management", "Client Relations"],
    email: "sneha.kulkarni@falconeng.com",
    phone: "+91 98765 43213",
    education: "PGDM in Project Management, B.Arch",
    bio: "Sneha excels at managing residential projects with precision and care. Her strong communication skills ensure clients are always informed and satisfied throughout the project lifecycle.",
    achievements: [
      "Managed 45+ residential projects",
      "100% on-time delivery record",
      "Client Satisfaction Award 2023",
      "Advanced Project Management Certification"
    ],
    projectsCompleted: 45,
    linkedin: "sneha-kulkarni"
  },
  {
    id: 5,
    name: "Vikram Naik",
    role: "Senior Engineer",
    department: "Construction",
    experience: "9+ years",
    specialization: ["Infrastructure", "Plumbing Systems", "MEP Coordination"],
    email: "vikram.naik@falconeng.com",
    phone: "+91 98765 43214",
    education: "B.E. in Civil Engineering",
    bio: "Vikram is an expert in infrastructure and MEP systems. His technical knowledge and problem-solving abilities make him a go-to person for complex engineering challenges.",
    achievements: [
      "Expert in MEP coordination",
      "50+ infrastructure projects",
      "Green Building Certified Professional",
      "Innovation Award for Plumbing Solutions"
    ],
    projectsCompleted: 50,
    linkedin: "vikram-naik"
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
              <Card 
                key={member.id} 
                className="group hover:shadow-strong transition-all cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
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

        {/* Team Member Details Modal */}
        <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedMember && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-bold">{selectedMember.name}</DialogTitle>
                      <p className="text-primary font-medium text-lg">{selectedMember.role}</p>
                      <Badge variant="secondary" className="mt-1">{selectedMember.department}</Badge>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Bio */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">About</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedMember.bio}</p>
                  </div>

                  {/* Contact & Education Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href={`mailto:${selectedMember.email}`} className="text-sm hover:text-primary">
                          {selectedMember.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <a href={`tel:${selectedMember.phone}`} className="text-sm hover:text-primary">
                          {selectedMember.phone}
                        </a>
                      </div>
                      {selectedMember.linkedin && (
                        <div className="flex items-center gap-2">
                          <Linkedin className="h-4 w-4 text-primary" />
                          <a 
                            href={`https://linkedin.com/in/${selectedMember.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:text-primary"
                          >
                            View LinkedIn
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <GraduationCap className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground">Education</p>
                          <p className="text-sm font-medium">{selectedMember.education}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground">Experience</p>
                          <p className="text-sm font-medium">{selectedMember.experience}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Briefcase className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground">Projects Completed</p>
                          <p className="text-sm font-medium">{selectedMember.projectsCompleted}+</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Areas of Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.specialization.map((spec, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
                    <div className="space-y-2">
                      {selectedMember.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground">{achievement}</p>
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
