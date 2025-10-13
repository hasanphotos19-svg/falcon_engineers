import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Full Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Project Details
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..."
                    className="w-full min-h-32"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Chiplun, Ratnagiri<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">
                      Available on request
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      info@falconengineers.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Instagram</h4>
                    <a 
                      href="https://www.instagram.com/falconengineers" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @falconengineers
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/10">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
