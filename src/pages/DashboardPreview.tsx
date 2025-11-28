import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeatmapComponent from "@/components/HeatmapComponent";
import AnalyticsChart from "@/components/AnalyticsChart";
import AlertsPanel from "@/components/AlertsPanel";
import PredictiveAnalytics from "@/components/PredictiveAnalytics";

const DashboardPreview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gradient-to-br from-background to-accent">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Dashboard Preview
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore the powerful analytics and visualization tools available in JalSentinel
              </p>
            </div>
            
            <div className="space-y-12">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl">Interactive Tableau Dashboard - Northeastern Region</CardTitle>
                  <CardDescription className="text-base">
                    Live Tableau analytics showing water quality metrics, contamination levels, and disease outbreak data
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPreview;
