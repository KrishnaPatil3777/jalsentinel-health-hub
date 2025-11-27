import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Activity, MapPin, Bell } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({ monitors: 0, predictions: 0, communities: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        monitors: Math.floor(247 * progress),
        predictions: Math.floor(98 * progress),
        communities: Math.floor(100 * progress),
      });

      if (step >= steps) clearInterval(timer);
    }, increment);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Animated Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-block animate-bounce">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-primary/20">
                    🌊 AI-Powered Monitoring
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                  <span className="inline-block hover:scale-110 transition-transform duration-300">Jal</span>
                  <span className="inline-block hover:scale-110 transition-transform duration-300 text-primary">Sentinel</span>
                </h1>
                
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  AI-Powered Water & Health Monitoring
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-2xl font-semibold">
                  Detect Early. Act Smart. Stay Healthy.
                </p>
                
                <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
                  A smart platform that combines AI, GIS, and community reporting to detect unsafe water 
                  conditions and predict water-borne disease outbreaks.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/features" className="group">
                    <Button size="lg" className="w-full sm:w-auto group-hover:scale-105 transition-transform shadow-lg">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/dashboard" className="group">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto group-hover:scale-105 transition-transform shadow-lg backdrop-blur-sm">
                      View Dashboard Preview
                    </Button>
                  </Link>
                </div>

                {/* Floating Feature Icons */}
                <div className="flex gap-4 pt-4">
                  {[
                    { icon: Droplets, label: "Water Quality", delay: "0s" },
                    { icon: Activity, label: "Health Data", delay: "0.2s" },
                    { icon: MapPin, label: "GIS Mapping", delay: "0.4s" },
                    { icon: Bell, label: "Alerts", delay: "0.6s" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-2 p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:scale-110 hover:bg-primary/10 transition-all cursor-pointer"
                      style={{ animationDelay: item.delay }}
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-3xl blur-3xl animate-pulse"></div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl group-hover:scale-105 transition-transform duration-500"></div>
                  <img
                    src={heroDashboard}
                    alt="JalSentinel Dashboard"
                    className="relative rounded-2xl shadow-2xl w-full transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Animated Stats Section */}
        <section ref={statsRef} className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in">
              Why JalSentinel?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in">
              Protecting communities through advanced technology and data-driven insights
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="text-5xl font-bold text-primary mb-4 tabular-nums group-hover:scale-110 transition-transform">
                  {counts.monitors}+
                </div>
                <div className="text-lg font-semibold mb-3 text-foreground">Active Monitors</div>
                <p className="text-muted-foreground leading-relaxed">
                  Real-time water quality surveillance across multiple locations
                </p>
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary/50 transition-all duration-500"></div>
              </div>
              
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
                <div className="text-5xl font-bold text-primary mb-4 tabular-nums group-hover:scale-110 transition-transform">
                  {counts.predictions}%
                </div>
                <div className="text-lg font-semibold mb-3 text-foreground">Prediction Accuracy</div>
                <p className="text-muted-foreground leading-relaxed">
                  Machine learning algorithms detect patterns and predict outbreaks
                </p>
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary/50 transition-all duration-500"></div>
              </div>
              
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-card to-background border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl font-bold text-primary mb-4 tabular-nums group-hover:scale-110 transition-transform">
                  {counts.communities}%
                </div>
                <div className="text-lg font-semibold mb-3 text-foreground">Community Coverage</div>
                <p className="text-muted-foreground leading-relaxed">
                  Empowering local communities with actionable health insights
                </p>
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary/50 transition-all duration-500"></div>
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
