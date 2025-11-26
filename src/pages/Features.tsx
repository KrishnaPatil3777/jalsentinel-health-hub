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
        <section className="py-20 bg-gradient-to-br from-background to-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
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
        
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A seamless integration of technology and community engagement
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2">Data Collection</h3>
                <p className="text-muted-foreground text-sm">
                  Sensors and community reports gather water quality data
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2">AI Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Machine learning processes and identifies patterns
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2">Alert Generation</h3>
                <p className="text-muted-foreground text-sm">
                  System automatically notifies relevant stakeholders
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-lg mb-2">Action Taken</h3>
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
