import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Heart, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-br from-background to-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About JalSentinel
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Protecting communities through innovative water quality monitoring and disease prevention
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To leverage artificial intelligence and geographic information systems to create a 
                    comprehensive water quality monitoring platform that detects contamination early, 
                    predicts disease outbreaks, and empowers communities with actionable health information. 
                    We are committed to reducing water-borne disease incidence through data-driven prevention 
                    and rapid response mechanisms.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Why JalSentinel Matters</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Water-borne diseases remain a critical public health challenge, affecting millions annually. 
                    Traditional monitoring methods are often reactive and insufficient. JalSentinel transforms 
                    this paradigm by providing predictive, real-time surveillance that enables proactive intervention. 
                    By combining AI analytics with community engagement, we create a robust early warning system 
                    that saves lives and resources.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mb-16">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Target Audience</CardTitle>
                <CardDescription className="text-base">
                  JalSentinel serves multiple stakeholders in the public health ecosystem
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Government Officials</h3>
                    <p className="text-muted-foreground text-sm">
                      Health departments and municipal authorities requiring data-driven policy decisions 
                      and resource allocation for water safety programs
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Panchayats</h3>
                    <p className="text-muted-foreground text-sm">
                      Local governance bodies needing tools to monitor water quality in rural areas 
                      and respond to community health concerns
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">NGOs</h3>
                    <p className="text-muted-foreground text-sm">
                      Non-governmental organizations working on water safety, public health, 
                      and community development initiatives
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Communities</h3>
                    <p className="text-muted-foreground text-sm">
                      Citizens and community groups who contribute reports and receive alerts 
                      about water quality in their neighborhoods
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Impact Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Short-term Impact</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Reduce response time to water contamination incidents by 75%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Establish monitoring networks in 50+ high-risk communities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Enable real-time data access for 100+ government health officials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Achieve 90% alert notification delivery within 5 minutes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Long-term Vision</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Reduce water-borne disease incidence by 40% in monitored regions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Predict disease outbreaks 7-14 days before peak with 85% accuracy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Create a national database of water quality trends and patterns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Empower 1 million+ citizens with health literacy and reporting tools</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
