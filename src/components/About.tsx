import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, CheckCircle, User } from "lucide-react";

const stats = [
  { icon: Award, label: "Years of Excellence", value: "10+" },
  { icon: Users, label: "Projects Completed", value: "100+" },
  { icon: Clock, label: "On-Time Delivery", value: "98%" },
  { icon: CheckCircle, label: "Client Satisfaction", value: "100%" }
];

export const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Falcon Engineers
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            Falcon Engineers in Chiplun is a distinguished firm of civil engineers and architects that 
            provides comprehensive contracting and building services. Led by our experienced professionals, 
            we deliver excellence in every project we undertake.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            Our team combines technical expertise with innovative solutions to bring your vision to life. 
            We specialize in residential, commercial, and civil engineering projects, backed by our commitment 
            to quality workmanship, timely delivery, and complete client satisfaction.
          </p>
          
          {/* Founder Section */}
          <div className="mt-8 p-6 md:p-8 bg-card rounded-lg border border-border/50 shadow-elevated">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-8 w-8 md:h-10 md:w-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  Mr. Fauzan Abdul Majid Parkar
                </h3>
                <p className="text-primary font-semibold text-base md:text-lg">
                  Founder & Owner
                </p>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  Leading Falcon Engineers with vision and dedication to excellence in construction
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border/50 hover:shadow-elevated transition-all">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
