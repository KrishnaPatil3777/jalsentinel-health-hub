import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const predictions = [
  {
    zone: 'Assam - Zone B',
    riskLevel: 'high',
    probability: 85,
    trend: 'up',
    factors: ['High rainfall', 'Poor drainage', 'Previous outbreaks'],
    recommendation: 'Deploy preventive measures immediately',
  },
  {
    zone: 'Manipur - Zone D',
    riskLevel: 'medium',
    probability: 58,
    trend: 'up',
    factors: ['Water stagnation', 'Temperature rise'],
    recommendation: 'Increase monitoring frequency',
  },
  {
    zone: 'Tripura - Zone A',
    riskLevel: 'high',
    probability: 78,
    trend: 'up',
    factors: ['Recent contamination', 'Dense population'],
    recommendation: 'Urgent intervention required',
  },
  {
    zone: 'Meghalaya - Zone C',
    riskLevel: 'low',
    probability: 25,
    trend: 'down',
    factors: ['Improved sanitation', 'Regular testing'],
    recommendation: 'Continue current protocols',
  },
  {
    zone: 'Nagaland - Zone E',
    riskLevel: 'medium',
    probability: 52,
    trend: 'stable',
    factors: ['Seasonal patterns', 'Moderate risk factors'],
    recommendation: 'Enhanced surveillance needed',
  },
];

const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'high':
      return 'text-destructive';
    case 'medium':
      return 'text-orange-500';
    case 'low':
      return 'text-primary';
    default:
      return 'text-muted-foreground';
  }
};

const getRiskBadge = (risk: string) => {
  switch (risk) {
    case 'high':
      return <Badge variant="destructive" className="uppercase">High Risk</Badge>;
    case 'medium':
      return <Badge variant="outline" className="uppercase border-orange-500 text-orange-500">Medium Risk</Badge>;
    case 'low':
      return <Badge variant="outline" className="uppercase border-primary text-primary">Low Risk</Badge>;
    default:
      return <Badge variant="secondary" className="uppercase">Unknown</Badge>;
  }
};

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case 'up':
      return <TrendingUp className="w-4 h-4 text-destructive" />;
    case 'down':
      return <TrendingDown className="w-4 h-4 text-primary" />;
    default:
      return <Activity className="w-4 h-4 text-muted-foreground" />;
  }
};

const PredictiveAnalytics = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl">7-Day Outbreak Forecast</CardTitle>
            <CardDescription>AI-powered risk assessment for water-borne disease outbreaks</CardDescription>
          </div>
          <Badge variant="secondary" className="text-sm">
            <Activity className="w-3 h-3 mr-1" />
            ML Model v2.3
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {predictions.map((pred, index) => (
            <div key={index} className="p-4 bg-card border border-border rounded-lg space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground">{pred.zone}</h4>
                  <div className="flex items-center gap-2">
                    {getRiskBadge(pred.riskLevel)}
                    {getTrendIcon(pred.trend)}
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-3xl font-bold ${getRiskColor(pred.riskLevel)}`}>
                    {pred.probability}%
                  </p>
                  <p className="text-xs text-muted-foreground">Probability</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Risk Level</span>
                  <span className="font-medium">{pred.probability}% likelihood</span>
                </div>
                <Progress value={pred.probability} className="h-2" />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Contributing Factors:</p>
                <div className="flex flex-wrap gap-2">
                  {pred.factors.map((factor, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {factor}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-border">
                <p className="text-sm">
                  <span className="font-medium text-foreground">Recommendation: </span>
                  <span className="text-muted-foreground">{pred.recommendation}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Model Accuracy:</strong> Predictions based on historical data, 
            weather patterns, water quality parameters, and disease surveillance data. 
            Current model accuracy: 87.3% over 6-month validation period.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictiveAnalytics;