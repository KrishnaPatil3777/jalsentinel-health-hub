import { Card } from '@/components/ui/card';
import { AlertCircle, Bell, Droplet } from 'lucide-react';

interface AlertCardProps {
  type: 'warning' | 'alert' | 'info';
  title: string;
  description: string;
  icon?: 'alert' | 'bell' | 'droplet';
}

const AlertCard = ({ type, title, description, icon = 'alert' }: AlertCardProps) => {
  const iconMap = {
    alert: AlertCircle,
    bell: Bell,
    droplet: Droplet,
  };

  const Icon = iconMap[icon];

  const getBgColor = () => {
    switch (type) {
      case 'warning':
        return 'bg-destructive/10 border-destructive/20';
      case 'alert':
        return 'bg-orange-500/10 border-orange-500/20';
      case 'info':
        return 'bg-primary/10 border-primary/20';
      default:
        return 'bg-muted';
    }
  };

  const getIconColor = () => {
    switch (type) {
      case 'warning':
        return 'text-destructive';
      case 'alert':
        return 'text-orange-500';
      case 'info':
        return 'text-primary';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <Card className={`p-4 border ${getBgColor()} hover:shadow-lg transition-all duration-300`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${getIconColor()}`} />
        <div className="space-y-1 flex-1">
          <h4 className="font-semibold text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default AlertCard;
