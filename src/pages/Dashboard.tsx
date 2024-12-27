import DashboardLayout from "@/components/layout/DashboardLayout";
import BiosphereSimulator from "@/components/quantum-biosphere/BiosphereSimulator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Brain, Dna, Leaf, ThermometerSun } from "lucide-react";

const mockData = [
  { time: '00:00', stability: 92, adaptation: 85 },
  { time: '04:00', stability: 95, adaptation: 87 },
  { time: '08:00', stability: 94, adaptation: 88 },
  { time: '12:00', stability: 98, adaptation: 92 },
  { time: '16:00', stability: 96, adaptation: 94 },
  { time: '20:00', stability: 97, adaptation: 95 },
];

const aiInsights = [
  {
    title: "Ecosystem Optimization",
    description: "Current atmospheric composition suggests increasing oxygen levels by 2% for optimal plant growth.",
    icon: Leaf,
  },
  {
    title: "Species Adaptation",
    description: "Genetic diversity in population A shows promising resistance to temperature variations.",
    icon: Dna,
  },
  {
    title: "Climate Control",
    description: "Recommended adjustment: Reduce night-time temperature by 1.5°C to match natural habitat patterns.",
    icon: ThermometerSun,
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Genesis Ark Command Center</h1>
          <div className="flex gap-4 items-center">
            <span className="text-sm text-muted-foreground">System Status: Optimal</span>
            <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
          </div>
        </div>
        
        {/* Real-Time Metrics Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Ecosystem Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-2xl font-bold text-green-500">98%</div>
                <Progress value={98} className="h-2" />
                <p className="text-muted-foreground text-sm">Optimal Conditions Maintained</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>O₂ Levels: 21%</div>
                  <div>CO₂ Levels: 0.04%</div>
                  <div>Humidity: 65%</div>
                  <div>pH Balance: 7.2</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Species Adaptation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-2xl font-bold text-blue-500">1,247</div>
                <Progress value={78} className="h-2" />
                <p className="text-muted-foreground text-sm">78% Adaptation Success Rate</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Flora: 892</div>
                  <div>Fauna: 355</div>
                  <div>Thriving: 972</div>
                  <div>Monitored: 275</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Environmental Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-2xl font-bold text-orange-500">23.5°C</div>
                <Progress value={92} className="h-2" />
                <p className="text-muted-foreground text-sm">92% Systems Efficiency</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Light: 12.4k lux</div>
                  <div>Pressure: 1 atm</div>
                  <div>Wind: 2.1 m/s</div>
                  <div>Gravity: 1.0 g</div>
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
              <CardTitle>Ecosystem Stability Trends</CardTitle>
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

        {/* AI Insights Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiInsights.map((insight, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <insight.icon className="w-5 h-5 text-primary" />
                  {insight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{insight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;