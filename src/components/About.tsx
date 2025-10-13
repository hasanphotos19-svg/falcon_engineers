import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, CheckCircle } from "lucide-react";

const stats = [
  { icon: Award, label: "Years of Excellence", value: "10+" },
  { icon: Users, label: "Projects Completed", value: "100+" },
  { icon: Clock, label: "On-Time Delivery", value: "98%" },
  { icon: CheckCircle, label: "Client Satisfaction", value: "100%" }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Falcon Engineering
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Based in Chiplun, Ratnagiri, Falcon Engineering is a trusted name in construction and civil engineering. 
            With years of experience and a commitment to excellence, we have successfully delivered numerous 
            residential, commercial, and infrastructure projects across Maharashtra.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our team of skilled professionals combines technical expertise with innovative solutions to bring 
            your vision to life. We pride ourselves on quality workmanship, timely delivery, and complete 
            client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
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
