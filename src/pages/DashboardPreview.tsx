import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveMap from "@/components/dashboard/InteractiveMap";
import TrendsCard from "@/components/dashboard/TrendsCard";
import AlertCard from "@/components/dashboard/AlertCard";
import AnalyticsChart from "@/components/AnalyticsChart";
import AlertsPanel from "@/components/AlertsPanel";
import PredictiveAnalytics from "@/components/PredictiveAnalytics";
import ResourcesSection from "@/components/ResourcesSection";

const DashboardPreview = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {/* Top Row - Map and Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Map Section - Takes up 2 columns */}
              <div className="lg:col-span-2">
                <InteractiveMap />
              </div>

              {/* Right Sidebar - Takes up 1 column */}
              <div className="space-y-6">
                <AlertCard
                  type="warning"
                  icon="alert"
                  title="Rising Contamination in Assam"
                  description="E. coli levels are above the safe limit."
                />
                
                <TrendsCard />
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Quick Alerts</h3>
                  <div className="space-y-3">
                    <AlertCard
                      type="warning"
                      icon="bell"
                      title="Unsafe Water Reported"
                      description="Water test shows E. coli contamination in user-submitted sample."
                    />
                    
                    <AlertCard
                      type="info"
                      icon="droplet"
                      title="Water Supply Update"
                      description="Scheduled maintenance in Meghalaya region."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Chart and Active Alerts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AnalyticsChart />
              <AlertsPanel />
            </div>

            {/* Contamination Risk Forecast - Center Aligned */}
            <div className="flex justify-center">
              <div className="w-full lg:w-2/3">
                <PredictiveAnalytics />
              </div>
            </div>

            {/* Resources Section */}
            <ResourcesSection />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPreview;
