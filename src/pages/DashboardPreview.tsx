import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
                  <CardTitle className="text-2xl">GIS Heatmap</CardTitle>
                  <CardDescription className="text-base">
                    Interactive geographic visualization showing water quality levels and disease outbreak zones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <Map className="w-20 h-20 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Interactive map with color-coded regions showing water quality status and disease prevalence
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-medium">Safe</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-medium">Moderate</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-medium">Warning</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-medium">Critical</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Analytics Charts</CardTitle>
                    <CardDescription className="text-base">
                      Real-time data visualization and trend analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <BarChart className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground text-sm">
                          Time-series graphs showing water quality parameters, disease cases, and seasonal patterns
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">pH Levels</span>
                        <span className="font-medium">6.5 - 7.5</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">TDS</span>
                        <span className="font-medium">250 ppm</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Turbidity</span>
                        <span className="font-medium">2 NTU</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Alerts Panel</CardTitle>
                    <CardDescription className="text-base">
                      Critical notifications and action items
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
                        <p className="text-muted-foreground text-sm">
                          Priority-sorted alerts with severity levels and recommended actions
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="p-3 bg-destructive/10 border-l-4 border-destructive rounded">
                        <p className="text-sm font-medium">High contamination detected</p>
                        <p className="text-xs text-muted-foreground">Zone B - Requires immediate action</p>
                      </div>
                      <div className="p-3 bg-yellow-500/10 border-l-4 border-yellow-500 rounded">
                        <p className="text-sm font-medium">Disease cases increasing</p>
                        <p className="text-xs text-muted-foreground">Zone D - Monitor closely</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Predictive Analytics</CardTitle>
                  <CardDescription className="text-base">
                    AI-powered forecasting for proactive intervention
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-8">
                    <div className="text-center mb-6">
                      <Activity className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">7-Day Outbreak Forecast</h3>
                      <p className="text-muted-foreground text-sm">
                        Machine learning models predict potential outbreak zones based on current conditions
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-background rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-primary mb-1">Low</p>
                        <p className="text-sm text-muted-foreground">Zone A Risk Level</p>
                      </div>
                      <div className="bg-background rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-yellow-500 mb-1">Medium</p>
                        <p className="text-sm text-muted-foreground">Zone B Risk Level</p>
                      </div>
                      <div className="bg-background rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-destructive mb-1">High</p>
                        <p className="text-sm text-muted-foreground">Zone C Risk Level</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Import icons at the top of the file
import { Map, BarChart, AlertCircle, Activity } from "lucide-react";

export default DashboardPreview;
