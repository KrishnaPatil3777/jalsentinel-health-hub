import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveMap from "@/components/dashboard/InteractiveMap";
import TrendsCard from "@/components/dashboard/TrendsCard";
import AlertCard from "@/components/dashboard/AlertCard";

const DashboardPreview = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Map Section - Takes up 2 columns */}
              <div className="lg:col-span-2 space-y-8">
                <InteractiveMap />
                
                {/* Bottom Alerts Section */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Alerts</h3>
                  <AlertCard
                    type="warning"
                    icon="bell"
                    title="Unsafe Water Reported."
                    description="Water test shows E. coli contamination in user-submitted sample."
                  />
                </div>
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
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Alerts</h3>
                  <AlertCard
                    type="warning"
                    icon="bell"
                    title="Unsafe Water Reported."
                    description="Water test shows E. coli contamination in user-submitted sample."
                  />
                  
                  <AlertCard
                    type="info"
                    icon="droplet"
                    title="Supply"
                    description="Presscot Apps urge airems"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPreview;
