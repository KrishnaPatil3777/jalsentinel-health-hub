import { Card } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const TrendsCard = () => {
  return (
    <Card className="bg-primary text-primary-foreground p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-4">
        <TrendingUp className="w-8 h-8 flex-shrink-0 mt-1" />
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Recent Trends</h3>
          <p className="text-base opacity-90">
            Water contamination has been increasing over the past 2 weeks.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TrendsCard;
