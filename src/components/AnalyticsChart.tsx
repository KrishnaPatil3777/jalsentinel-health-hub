import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const waterQualityData = [
  { month: 'Jan', pH: 7.2, tds: 220, turbidity: 1.8, cases: 45 },
  { month: 'Feb', pH: 7.1, tds: 235, turbidity: 2.1, cases: 52 },
  { month: 'Mar', pH: 6.9, tds: 268, turbidity: 2.8, cases: 68 },
  { month: 'Apr', pH: 6.7, tds: 295, turbidity: 3.2, cases: 89 },
  { month: 'May', pH: 6.8, tds: 282, turbidity: 2.9, cases: 76 },
  { month: 'Jun', pH: 7.0, tds: 245, turbidity: 2.3, cases: 58 },
];

const chartConfig = {
  pH: {
    label: 'pH Level',
    color: 'hsl(var(--chart-1))',
  },
  tds: {
    label: 'TDS (ppm)',
    color: 'hsl(var(--chart-2))',
  },
  turbidity: {
    label: 'Turbidity (NTU)',
    color: 'hsl(var(--chart-3))',
  },
  cases: {
    label: 'Disease Cases',
    color: 'hsl(var(--destructive))',
  },
};

const AnalyticsChart = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Water Quality Trends</CardTitle>
          <CardDescription>6-month water parameter analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={waterQualityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="pH" 
                  stroke="hsl(var(--chart-1))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--chart-1))' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="turbidity" 
                  stroke="hsl(var(--chart-3))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--chart-3))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disease Cases by Month</CardTitle>
          <CardDescription>Reported water-borne disease incidents</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={waterQualityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="cases" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Average pH Level</CardDescription>
            <CardTitle className="text-3xl">6.95</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Optimal range: 6.5-7.5</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Average TDS</CardDescription>
            <CardTitle className="text-3xl">258 ppm</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Safe limit: &lt;500 ppm</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Average Turbidity</CardDescription>
            <CardTitle className="text-3xl">2.5 NTU</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Safe limit: &lt;5 NTU</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsChart;