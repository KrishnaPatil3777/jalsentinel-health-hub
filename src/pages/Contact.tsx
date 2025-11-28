import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon."
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gradient-to-br from-background via-primary/5 to-accent/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-primary/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-l from-accent/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 hover:scale-105 transition-transform duration-300">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions about JalSentinel? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/50 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                          Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="hover:border-primary transition-colors"
                        />
                      </div>
                      
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="hover:border-primary transition-colors"
                        />
                      </div>
                      
                      <div className="group">
                        <label htmlFor="message" className="block text-sm font-medium mb-2 group-hover:text-primary transition-colors">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="hover:border-primary transition-colors"
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 group animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground text-sm">info@jalsentinel.gov.in</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground text-sm">+91 1800 XXX XXXX</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground text-sm">
                          Ministry of Health<br />
                          Government of India<br />
                          New Delhi, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 group animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
