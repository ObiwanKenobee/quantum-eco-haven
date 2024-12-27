import DashboardLayout from "@/components/layout/DashboardLayout";
import BiosphereSimulator from "@/components/quantum-biosphere/BiosphereSimulator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Quantum Biosphere Control Center</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Ecosystem Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">98%</div>
              <p className="text-muted-foreground">Optimal Conditions</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Active Species</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-500">1,247</div>
              <p className="text-muted-foreground">Thriving Population</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Temperature</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">23.5°C</div>
              <p className="text-muted-foreground">Within Parameters</p>
            </CardContent>
          </Card>
        </div>

        <BiosphereSimulator />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;