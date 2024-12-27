import DashboardLayout from "@/components/layout/DashboardLayout";
import BiosphereSimulator from "@/components/quantum-biosphere/BiosphereSimulator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { time: '00:00', stability: 92 },
  { time: '04:00', stability: 95 },
  { time: '08:00', stability: 94 },
  { time: '12:00', stability: 98 },
  { time: '16:00', stability: 96 },
  { time: '20:00', stability: 97 },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Genesis Ark Command Center</h1>
          <div className="flex gap-2">
            <span className="text-sm text-muted-foreground">Last Update: Live</span>
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5"></span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Ecosystem Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-2xl font-bold text-green-500">98%</div>
                <Progress value={98} className="h-2" />
                <p className="text-muted-foreground text-sm">Optimal Conditions Maintained</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Active Species</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-2xl font-bold text-blue-500">1,247</div>
                <Progress value={78} className="h-2" />
                <p className="text-muted-foreground text-sm">78% Adaptation Success Rate</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Environmental Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-2xl font-bold text-orange-500">23.5°C</div>
                <Progress value={92} className="h-2" />
                <p className="text-muted-foreground text-sm">92% Systems Efficiency</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quantum Biosphere Simulator</CardTitle>
            </CardHeader>
            <CardContent>
              <BiosphereSimulator />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ecosystem Stability Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="stability" 
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={{ fill: '#22c55e' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;