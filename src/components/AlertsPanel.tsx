import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertCircle, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const alerts = [
  {
    id: 1,
    severity: 'critical',
    title: 'High E.coli levels detected',
    location: 'Assam - Zone B',
    time: '15 mins ago',
    description: 'Water sample shows 450 CFU/100ml - exceeds safe limit',
    action: 'Deploy purification team',
  },
  {
    id: 2,
    severity: 'warning',
    title: 'Turbidity increase detected',
    location: 'Manipur - Zone D',
    time: '2 hours ago',
    description: 'Turbidity levels at 4.2 NTU and rising',
    action: 'Monitor and test',
  },
  {
    id: 3,
    severity: 'critical',
    title: 'Disease outbreak reported',
    location: 'Tripura - Zone A',
    time: '3 hours ago',
    description: '12 new cholera cases in the last 24 hours',
    action: 'Immediate intervention required',
  },
  {
    id: 4,
    severity: 'info',
    title: 'pH fluctuation',
    location: 'Meghalaya - Zone C',
    time: '5 hours ago',
    description: 'pH dropped to 6.3, within acceptable range',
    action: 'Continue monitoring',
  },
  {
    id: 5,
    severity: 'warning',
    title: 'TDS levels elevated',
    location: 'Nagaland - Zone E',
    time: '6 hours ago',
    description: 'Total Dissolved Solids at 380 ppm',
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
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Active Alerts</CardTitle>
            <CardDescription>Priority notifications requiring action</CardDescription>
          </div>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            {alerts.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 border-l-4 rounded-lg ${getSeverityColor(alert.severity)}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="mt-0.5">
                      {getSeverityIcon(alert.severity)}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground">{alert.title}</h4>
                        {getSeverityBadge(alert.severity)}
                      </div>
                      <p className="text-sm text-muted-foreground">{alert.location}</p>
                      <p className="text-sm">{alert.description}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-muted-foreground">{alert.time}</span>
                        <Button size="sm" variant="outline">
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