import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertCircle, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const alerts = [
  {
    id: 1,
    severity: 'critical',
    title: 'Severe water contamination detected',
    region: 'Assam Region',
    time: '15 mins ago',
    description: 'E.coli levels at 550 CFU/100ml with heavy metal contamination',
    action: 'Deploy purification team',
  },
  {
    id: 2,
    severity: 'warning',
    title: 'Industrial pollutants detected',
    region: 'Manipur Region',
    time: '2 hours ago',
    description: 'Heavy metals exceeding safe limits in water supply',
    action: 'Monitor and test',
  },
  {
    id: 3,
    severity: 'critical',
    title: 'Disease outbreak reported',
    region: 'Tripura Region',
    time: '3 hours ago',
    description: '18 new cholera cases linked to contaminated water source',
    action: 'Immediate intervention required',
  },
  {
    id: 4,
    severity: 'info',
    title: 'Water quality improving',
    region: 'Meghalaya Region',
    time: '5 hours ago',
    description: 'Contamination levels decreasing after treatment',
    action: 'Continue monitoring',
  },
  {
    id: 5,
    severity: 'warning',
    title: 'Chemical contamination alert',
    region: 'Nagaland Region',
    time: '6 hours ago',
    description: 'Pesticide residues detected in groundwater samples',
    action: 'Schedule detailed analysis',
  },
];

const getSeverityIcon = (severity: string) => {
  switch (severity) {
    case 'critical':
      return <AlertCircle className="w-5 h-5" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5" />;
    case 'info':
      return <Info className="w-5 h-5" />;
    default:
      return <CheckCircle className="w-5 h-5" />;
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'critical':
      return 'bg-destructive/10 border-destructive text-destructive';
    case 'warning':
      return 'bg-orange-500/10 border-orange-500 text-orange-500';
    case 'info':
      return 'bg-primary/10 border-primary text-primary';
    default:
      return 'bg-muted border-border text-muted-foreground';
  }
};

const getSeverityBadge = (severity: string) => {
  switch (severity) {
    case 'critical':
      return <Badge variant="destructive" className="uppercase">Critical</Badge>;
    case 'warning':
      return <Badge variant="outline" className="uppercase border-orange-500 text-orange-500">Warning</Badge>;
    case 'info':
      return <Badge variant="outline" className="uppercase">Info</Badge>;
    default:
      return <Badge variant="secondary" className="uppercase">Normal</Badge>;
  }
};

const AlertsPanel = () => {
  return (
    <Card className="h-full hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/50 animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Active Alerts</CardTitle>
            <CardDescription>Priority notifications requiring action</CardDescription>
          </div>
          <Badge variant="secondary" className="text-lg px-3 py-1 hover:scale-110 transition-transform">
            {alerts.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div
                key={alert.id}
                className={`p-4 border-l-4 rounded-lg ${getSeverityColor(alert.severity)} hover:shadow-lg hover:-translate-x-2 transition-all duration-300 cursor-pointer animate-fade-in`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="mt-0.5 hover:scale-125 transition-transform">
                      {getSeverityIcon(alert.severity)}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground hover:text-primary transition-colors">{alert.title}</h4>
                        {getSeverityBadge(alert.severity)}
                      </div>
                      <p className="text-sm text-muted-foreground">{alert.region}</p>
                      <p className="text-sm">{alert.description}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-muted-foreground">{alert.time}</span>
                        <Button size="sm" variant="outline" className="hover:scale-110 transition-transform">
                          {alert.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;