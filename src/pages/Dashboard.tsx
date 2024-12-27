import DashboardLayout from "@/components/layout/DashboardLayout";
import BiosphereSimulator from "@/components/quantum-biosphere/BiosphereSimulator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertCircle, Brain, Dna, Leaf, ThermometerSun, Rocket, Shield, Users, Globe2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const mockData = [
  { time: '00:00', stability: 92, adaptation: 85, temperature: 23.1 },
  { time: '04:00', stability: 95, adaptation: 87, temperature: 23.3 },
  { time: '08:00', stability: 94, adaptation: 88, temperature: 23.4 },
  { time: '12:00', stability: 98, adaptation: 92, temperature: 23.6 },
  { time: '16:00', stability: 96, adaptation: 94, temperature: 23.5 },
  { time: '20:00', stability: 97, adaptation: 95, temperature: 23.4 },
];

const aiInsights = [
  {
    title: "Ecosystem Optimization",
    description: "Current atmospheric composition suggests increasing oxygen levels by 2% for optimal plant growth.",
    icon: Leaf,
    severity: "info",
  },
  {
    title: "Species Adaptation Alert",
    description: "Critical: Genetic diversity in population A shows concerning resistance patterns.",
    icon: Dna,
    severity: "warning",
  },
  {
    title: "Climate Control Warning",
    description: "Urgent: Temperature fluctuations exceeding safe thresholds in Sector 7.",
    icon: ThermometerSun,
    severity: "destructive",
  },
];

const quickActions = [
  {
    title: "Launch Simulation",
    icon: Rocket,
    action: () => toast({
      title: "Simulation Initiated",
      description: "Quantum biosphere simulation is now running...",
    }),
  },
  {
    title: "Security Scan",
    icon: Shield,
    action: () => toast({
      title: "Security Scan Started",
      description: "Analyzing ecosystem vulnerabilities...",
    }),
  },
  {
    title: "Team Sync",
    icon: Users,
    action: () => toast({
      title: "Team Sync Requested",
      description: "Notifying team members for synchronization...",
    }),
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Genesis Ark Command Center</h1>
            <p className="text-muted-foreground mt-1">Monitoring 1,247 species across 12 biospheres</p>
          </div>
          <div className="flex gap-4">
            {quickActions.map((action) => (
              <Button
                key={action.title}
                variant="outline"
                className="flex items-center gap-2"
                onClick={action.action}
              >
                <action.icon className="w-4 h-4" />
                {action.title}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Enhanced Real-Time Metrics Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-green-500" />
                Ecosystem Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-end gap-2">
                  <div className="text-2xl font-bold text-green-500">98%</div>
                  <span className="text-sm text-green-600">↑ 2.3%</span>
                </div>
                <Progress value={98} className="h-2" />
                <p className="text-muted-foreground text-sm">Optimal Conditions Maintained</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    O₂ Levels: 21%
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    CO₂ Levels: 0.04%
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    Humidity: 65%
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    pH Balance: 7.2
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dna className="w-5 h-5 text-blue-500" />
                Species Adaptation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-end gap-2">
                  <div className="text-2xl font-bold text-blue-500">1,247</div>
                  <span className="text-sm text-blue-600">↑ 12 new</span>
                </div>
                <Progress value={78} className="h-2" />
                <p className="text-muted-foreground text-sm">78% Adaptation Success Rate</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    Flora: 892
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    Fauna: 355
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    Thriving: 972
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                    Monitored: 275
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-orange-500" />
                Environmental Controls
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-end gap-2">
                  <div className="text-2xl font-bold text-orange-500">23.5°C</div>
                  <span className="text-sm text-orange-600">↓ 0.2°C</span>
                </div>
                <Progress value={92} className="h-2" />
                <p className="text-muted-foreground text-sm">92% Systems Efficiency</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    Light: 12.4k lux
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                    Pressure: 1 atm
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                    Wind: 2.1 m/s
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                    Gravity: 1.0 g
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Enhanced Quantum Biosphere Simulator */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-primary" />
                Quantum Biosphere Simulator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BiosphereSimulator />
            </CardContent>
          </Card>

          {/* Enhanced Ecosystem Stability Trends */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Ecosystem Stability Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
                    <XAxis dataKey="time" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="stability" 
                      name="Ecosystem Stability"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={{ fill: '#22c55e' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="adaptation" 
                      name="Species Adaptation"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ fill: '#3b82f6' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced AI Insights Panel */}
        <div className="space-y-4">
          {aiInsights.map((insight, index) => (
            <Alert key={index} variant={insight.severity as any}>
              <insight.icon className="h-4 w-4" />
              <AlertTitle>{insight.title}</AlertTitle>
              <AlertDescription>
                {insight.description}
              </AlertDescription>
            </Alert>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;