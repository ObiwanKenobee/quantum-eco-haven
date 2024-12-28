import { Card } from "@/components/ui/card";
import { Globe } from "lucide-react";

interface EnvironmentalAnalyzerProps {
  speciesId: string;
}

const EnvironmentalAnalyzer = ({ speciesId }: EnvironmentalAnalyzerProps) => {
  console.log("Rendering EnvironmentalAnalyzer component for species:", speciesId);

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Globe className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Environmental Analysis</h3>
      </div>

      <div className="grid gap-4">
        <div className="p-3 bg-muted rounded-lg">
          <h4 className="font-medium mb-2">Planet Conditions</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Gravity</span>
              <span>1.2G</span>
            </div>
            <div className="flex justify-between">
              <span>Temperature</span>
              <span>-20°C to 40°C</span>
            </div>
            <div className="flex justify-between">
              <span>Atmosphere</span>
              <span>Thin, CO2-rich</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EnvironmentalAnalyzer;