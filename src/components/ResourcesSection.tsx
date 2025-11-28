import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Droplets, Heart, AlertTriangle } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      title: "Water Safety Guidelines",
      description: "Essential practices for ensuring safe drinking water and proper water storage",
      icon: Droplets,
      file: "water-safety-guidelines.pdf",
    },
    {
      title: "Hygiene Practices",
      description: "Daily hygiene routines and sanitation methods to prevent waterborne diseases",
      icon: Heart,
      file: "hygiene-practices.pdf",
    },
    {
      title: "Emergency Response Procedures",
      description: "Step-by-step guide for responding to water contamination emergencies",
      icon: AlertTriangle,
      file: "emergency-response.pdf",
    },
    {
      title: "Community Health Monitoring",
      description: "How to participate in community-based health surveillance programs",
      icon: FileText,
      file: "community-health-monitoring.pdf",
    },
  ];

  const handleDownload = (fileName: string) => {
    // In production, this would download actual PDF files
    // For now, we'll show a toast message
    const link = document.createElement("a");
    link.href = "#";
    link.download = fileName;
    
    alert(`Downloading ${fileName}...\nIn a production environment, this would download the actual resource file.`);
  };

  return (
    <Card className="overflow-hidden animate-fade-in hover:shadow-xl transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
        <CardTitle className="text-2xl flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          Prevention & Response Resources
        </CardTitle>
        <CardDescription className="text-base">
          Download essential guides and materials for water safety and emergency preparedness
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group p-4 border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-card to-background"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <resource.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {resource.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload(resource.file)}
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resource
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-accent/20 rounded-lg border border-accent">
          <p className="text-sm text-muted-foreground text-center">
            💡 <strong>Tip:</strong> Keep these resources handy and share them with your community to promote water safety awareness.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;
