import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background to-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-block">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    AI-Powered Monitoring
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  JalSentinel
                </h1>
                
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  AI-Powered Water & Health Monitoring
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Detect Early. Act Smart. Stay Healthy.
                </p>
                
                <p className="text-lg text-foreground/80 max-w-2xl">
                  A smart platform that combines AI, GIS, and community reporting to detect unsafe water 
                  conditions and predict water-borne disease outbreaks.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/features">
                    <Button size="lg" className="group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button size="lg" variant="outline">
                      View Dashboard Preview
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative animate-scale-in">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl"></div>
                <img
                  src={heroDashboard}
                  alt="JalSentinel Dashboard"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why JalSentinel?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Protecting communities through advanced technology and data-driven insights
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-lg font-semibold mb-2">Continuous Monitoring</div>
                <p className="text-muted-foreground">
                  Real-time water quality surveillance across multiple locations
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">AI</div>
                <div className="text-lg font-semibold mb-2">Predictive Analytics</div>
                <p className="text-muted-foreground">
                  Machine learning algorithms detect patterns and predict outbreaks
                </p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-lg font-semibold mb-2">Community Focused</div>
                <p className="text-muted-foreground">
                  Empowering local communities with actionable health insights
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
