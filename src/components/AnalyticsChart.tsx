import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const contaminationData = [
  { region: 'Assam', contaminationLevel: 78, ecoli: 420, heavyMetals: 0.18, affectedPopulation: 45000 },
  { region: 'Manipur', contaminationLevel: 65, ecoli: 340, heavyMetals: 0.22, affectedPopulation: 32000 },
  { region: 'Tripura', contaminationLevel: 85, ecoli: 550, heavyMetals: 0.28, affectedPopulation: 58000 },
  { region: 'Meghalaya', contaminationLevel: 42, ecoli: 180, heavyMetals: 0.09, affectedPopulation: 18000 },
  { region: 'Nagaland', contaminationLevel: 58, ecoli: 290, heavyMetals: 0.15, affectedPopulation: 28000 },
  { region: 'Mizoram', contaminationLevel: 51, ecoli: 235, heavyMetals: 0.12, affectedPopulation: 22000 },
];

const chartConfig = {
  contaminationLevel: {
    label: 'Contamination Index',
    color: 'hsl(var(--destructive))',
  },
  ecoli: {
    label: 'E.coli (CFU/100ml)',
    color: 'hsl(var(--chart-1))',
  },
  heavyMetals: {
    label: 'Heavy Metals (mg/L)',
    color: 'hsl(var(--chart-2))',
  },
  affectedPopulation: {
    label: 'Affected Population',
    color: 'hsl(var(--chart-3))',
  },
};

const AnalyticsChart = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
        <CardHeader className="bg-gradient-to-r from-destructive/10 to-transparent">
          <CardTitle>Water Contamination by Region</CardTitle>
          <CardDescription>Northeastern regions contamination analysis</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="w-full overflow-hidden">
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={contaminationData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="contaminationLevel" 
                    stroke="hsl(var(--destructive))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--destructive))', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="ecoli" 
                    stroke="hsl(var(--chart-1))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--chart-1))', r: 4 }}
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
          <CardTitle>Affected Population by Region</CardTitle>
          <CardDescription>People impacted by water contamination</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="w-full overflow-hidden">
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={contaminationData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="affectedPopulation" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-card to-destructive/5 cursor-pointer group">
          <CardHeader className="pb-3">
            <CardDescription className="group-hover:text-destructive transition-colors">Avg Contamination Index</CardDescription>
            <CardTitle className="text-3xl group-hover:scale-110 transition-transform text-destructive">63.2</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Critical threshold: &gt;75</p>
            <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-destructive to-destructive/50 transition-all duration-500"></div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-card to-destructive/5 cursor-pointer group">
          <CardHeader className="pb-3">
            <CardDescription className="group-hover:text-destructive transition-colors">Avg E.coli Levels</CardDescription>
            <CardTitle className="text-3xl group-hover:scale-110 transition-transform text-destructive">335 CFU</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Safe limit: &lt;10 CFU/100ml</p>
            <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-destructive to-destructive/50 transition-all duration-500"></div>
          </CardContent>
        </Card>
        <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-card to-destructive/5 cursor-pointer group">
          <CardHeader className="pb-3">
            <CardDescription className="group-hover:text-destructive transition-colors">Total Affected</CardDescription>
            <CardTitle className="text-3xl group-hover:scale-110 transition-transform text-destructive">203K</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Population at risk</p>
            <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-destructive to-destructive/50 transition-all duration-500"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsChart;