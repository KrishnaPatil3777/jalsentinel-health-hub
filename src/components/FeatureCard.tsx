import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 group bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 cursor-pointer">
      <CardHeader>
        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-xl group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/20">
          <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
        <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary/50 transition-all duration-500"></div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
