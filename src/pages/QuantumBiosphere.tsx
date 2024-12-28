import BiosphereSimulator from "@/components/quantum-biosphere/BiosphereSimulator";
import { Card } from "@/components/ui/card";

const QuantumBiosphere = () => {
  return (
    <div className="w-full space-y-4 p-4 animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">Quantum Biosphere</h1>
      <Card className="p-4">
        <BiosphereSimulator />
      </Card>
    </div>
  );
};

export default QuantumBiosphere;