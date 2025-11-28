import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { Droplets, Map, Bell, TrendingUp, BarChart3, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Droplets,
      title: "AI Water Quality Detection",
      description: "Advanced machine learning algorithms continuously analyze water samples and sensor data to detect contamination, unsafe pH levels, and harmful bacteria in real-time."
    },
    {
      icon: Map,
      title: "GIS Disease Heatmap",
      description: "Interactive geographic information system visualizes disease outbreak patterns, water quality zones, and at-risk areas using color-coded heatmaps for quick identification."
    },
    {
      icon: Bell,
      title: "Automated Alerts & Notifications",
      description: "Instant SMS and app notifications sent to officials, healthcare workers, and community members when water quality issues or potential outbreaks are detected."
    },
    {
      icon: TrendingUp,
      title: "Early Outbreak Prediction",
      description: "Predictive analytics combine historical data, weather patterns, and current water quality metrics to forecast potential disease outbreaks days in advance."
    },
    {
      icon: BarChart3,
      title: "Data Analytics for Officials",
      description: "Comprehensive dashboards provide government officials and health departments with actionable insights, trends, and reports for evidence-based decision making."
    },
    {
      icon: Users,
      title: "Community Reporting Integration",
      description: "Empowers citizens to report water quality issues through mobile app, creating a crowdsourced network of real-time data from communities on the ground."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/80 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-primary/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-l from-accent/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 hover:scale-105 transition-transform duration-300">
                Powerful Features
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                JalSentinel combines cutting-edge AI technology with practical tools to protect 
                communities from water-borne diseases
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 hover:scale-105 transition-transform duration-300">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A seamless integration of technology and community engagement
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group hover:-translate-y-2 transition-all duration-500 animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-125 group-hover:shadow-xl transition-all duration-300">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Data Collection</h3>
                <p className="text-muted-foreground text-sm">
                  Sensors and community reports gather water quality data
                </p>
              </div>
              
              <div className="text-center group hover:-translate-y-2 transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-125 group-hover:shadow-xl transition-all duration-300">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">AI Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Machine learning processes and identifies patterns
                </p>
              </div>
              
              <div className="text-center group hover:-translate-y-2 transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-125 group-hover:shadow-xl transition-all duration-300">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Alert Generation</h3>
                <p className="text-muted-foreground text-sm">
                  System automatically notifies relevant stakeholders
                </p>
              </div>
              
              <div className="text-center group hover:-translate-y-2 transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-125 group-hover:shadow-xl transition-all duration-300">
                  4
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Action Taken</h3>
                <p className="text-muted-foreground text-sm">
                  Officials respond quickly to protect communities
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

export default Features;
