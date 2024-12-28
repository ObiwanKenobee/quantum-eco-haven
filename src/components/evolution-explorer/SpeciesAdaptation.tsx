import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Dna } from "lucide-react";

interface SpeciesAdaptationProps {
  speciesId: string;
}

const SpeciesAdaptation = ({ speciesId }: SpeciesAdaptationProps) => {
  console.log("Rendering SpeciesAdaptation component for species:", speciesId);

  const traits = [
    { name: "Radiation Resistance", value: 75 },
    { name: "Temperature Tolerance", value: 60 },
    { name: "Resource Efficiency", value: 85 },
  ];

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Dna className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Species Adaptation</h3>
      </div>

      <div className="space-y-4">
        {traits.map((trait) => (
          <div key={trait.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{trait.name}</span>
              <span className="text-muted-foreground">{trait.value}%</span>
            </div>
            <Progress value={trait.value} className="h-2" />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SpeciesAdaptation;