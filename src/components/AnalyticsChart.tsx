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
    <div className="space-y-8 animate-fade-in">
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
          <CardTitle>Water Quality Trends</CardTitle>
          <CardDescription>6-month water parameter analysis</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="w-full overflow-hidden">
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={waterQualityData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="pH" 
                    stroke="hsl(var(--chart-1))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--chart-1))', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="turbidity" 
                    stroke="hsl(var(--chart-3))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--chart-3))', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
        <CardHeader className="bg-gradient-to-r from-destructive/10 to-transparent">
          <CardTitle>Disease Cases by Month</CardTitle>
          <CardDescription>Reported water-borne disease incidents</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="w-full overflow-hidden">
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={waterQualityData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="cases" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-card to-primary/5 cursor-pointer group">
          <CardHeader className="pb-3">
            <CardDescription className="group-hover:text-primary transition-colors">Average pH Level</CardDescription>
            <CardTitle className="text-3xl group-hover:scale-110 transition-transform">6.95</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Optimal range: 6.5-7.5</p>
            <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary/50 transition-all duration-500"></div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-card to-primary/5 cursor-pointer group">
          <CardHeader className="pb-3">
            <CardDescription className="group-hover:text-primary transition-colors">Average TDS</CardDescription>
            <CardTitle className="text-3xl group-hover:scale-110 transition-transform">258 ppm</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Safe limit: &lt;500 ppm</p>
            <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary/50 transition-all duration-500"></div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-card to-primary/5 cursor-pointer group">
          <CardHeader className="pb-3">
            <CardDescription className="group-hover:text-primary transition-colors">Average Turbidity</CardDescription>
            <CardTitle className="text-3xl group-hover:scale-110 transition-transform">2.5 NTU</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Safe limit: &lt;5 NTU</p>
            <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary/50 transition-all duration-500"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsChart;