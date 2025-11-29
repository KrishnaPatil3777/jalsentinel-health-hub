import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeatmapComponent from "@/components/HeatmapComponent";
import AnalyticsChart from "@/components/AnalyticsChart";
import AlertsPanel from "@/components/AlertsPanel";
import PredictiveAnalytics from "@/components/PredictiveAnalytics";
import ResourcesSection from "@/components/ResourcesSection";

const DashboardPreview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gradient-to-br from-background to-accent">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Dashboard Preview
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore the powerful analytics and visualization tools available in JalSentinel
              </p>
            </div>
            
            <div className="space-y-12">
              <Card className="overflow-hidden animate-fade-in hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 pb-6">
                  <CardTitle className="text-xl md:text-2xl mb-3 break-words">
                    Interactive Tableau Dashboard - Northeastern Region
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base leading-relaxed break-words">
                    Live Tableau analytics showing water quality metrics, contamination levels, and disease outbreak data.<br />
                    Explore the visualization below for real-time insights into drainage system analysis and water safety monitoring.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <HeatmapComponent />
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <AnalyticsChart />
                </div>
                <div>
                  <AlertsPanel />
                </div>
              </div>
              
              <PredictiveAnalytics />
              
              <ResourcesSection />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPreview;
