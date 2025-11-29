import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const WaterTesting = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setAnalysisResult(null);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage || !previewUrl) {
      toast({
        title: "No image selected",
        description: "Please upload a water test strip image first.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const { data, error } = await supabase.functions.invoke('analyze-water-test', {
        body: { image: previewUrl }
      });

      if (error) throw error;

      setAnalysisResult(data.analysis);
      toast({
        title: "Analysis complete",
        description: "Your water test strip has been analyzed.",
      });
    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis failed",
        description: "Failed to analyze the water test strip. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gradient-to-br from-background to-accent">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Digital Water Testing
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Upload an image of your water test strip for AI-powered analysis
              </p>
            </div>
            
            <div className="space-y-8">
              <Card className="overflow-hidden animate-fade-in">
                <CardHeader>
                  <CardTitle>Upload Test Strip Image</CardTitle>
                  <CardDescription>
                    Take a clear photo of your water test strip and upload it for instant analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageSelect}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <div className="flex flex-col items-center space-y-4">
                        <Upload className="w-12 h-12 text-muted-foreground" />
                        <div>
                          <p className="text-lg font-medium text-foreground">
                            Click to upload test strip image
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            PNG, JPG, JPEG up to 10MB
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>

                  {previewUrl && (
                    <div className="space-y-4">
                      <div className="rounded-lg overflow-hidden border border-border">
                        <img 
                          src={previewUrl} 
                          alt="Water test strip preview" 
                          className="w-full h-auto max-h-96 object-contain bg-muted"
                        />
                      </div>
                      
                      <Button 
                        onClick={handleAnalyze} 
                        disabled={isAnalyzing}
                        className="w-full"
                        size="lg"
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          "Analyze Test Strip"
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {analysisResult && (
                <Card className="animate-fade-in border-primary/50">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-6 h-6 text-primary" />
                      <CardTitle>Analysis Results</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                        {analysisResult}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="bg-muted/50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">Tips for Best Results</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Ensure good lighting when taking the photo</li>
                    <li>• Keep the test strip flat and in focus</li>
                    <li>• Include the entire test strip in the frame</li>
                    <li>• Avoid shadows and reflections</li>
                    <li>• Take the photo immediately after the recommended wait time</li>
                  </ul>
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

export default WaterTesting;
