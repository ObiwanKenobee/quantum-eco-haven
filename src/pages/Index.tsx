import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Globe, Dna, Database, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-green-900 to-blue-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white p-6">
          <h1 className="text-5xl font-bold mb-6">Genesis Ark Initiative</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Pioneering the future of interplanetary wildlife conservation through cutting-edge technology and community collaboration.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate("/dashboard")}
            className="bg-green-600 hover:bg-green-700"
          >
            Enter Portal
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Globe className="w-12 h-12 text-green-600 mb-4" />
              <CardTitle>Quantum Biosphere</CardTitle>
            </CardHeader>
            <CardContent>
              Create and simulate ecosystems for hypothetical planets with our advanced quantum computing algorithms.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Dna className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle>Evolution Explorer</CardTitle>
            </CardHeader>
            <CardContent>
              Experiment with AI-driven tools to simulate species adaptations for various planetary conditions.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Database className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle>Ecosystem Ledger</CardTitle>
            </CardHeader>
            <CardContent>
              Track and monitor conservation efforts through our blockchain-powered transparency system.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle>Conservation Hub</CardTitle>
            </CardHeader>
            <CardContent>
              Join our global community of conservationists and contribute to interplanetary biodiversity.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;