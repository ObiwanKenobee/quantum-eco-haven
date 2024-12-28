import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dna, Globe, Brain, Users, TreeDeciduous, Scale } from "lucide-react";
import BiosphereSimulator from "../quantum-biosphere/BiosphereSimulator";
import SpeciesAdaptation from "./SpeciesAdaptation";
import EnvironmentalAnalyzer from "./EnvironmentalAnalyzer";
import { useToast } from "../ui/use-toast";

const EvolutionExplorer = () => {
  const { toast } = useToast();
  const [activeSpecies, setActiveSpecies] = useState("species-1");

  console.log("Rendering EvolutionExplorer component");

  return (
    <div className="w-full space-y-4 p-4 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Evolution Explorer</h1>
        <div className="flex gap-2">
          <button
            onClick={() => toast({ title: "AI Analysis Started", description: "Analyzing current species adaptations..." })}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            <Brain className="w-4 h-4" />
            Run AI Analysis
          </button>
        </div>
      </div>

      <Tabs defaultValue="species" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="species" className="flex items-center gap-2">
            <Dna className="w-4 h-4" />
            Species
          </TabsTrigger>
          <TabsTrigger value="environment" className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Environment
          </TabsTrigger>
          <TabsTrigger value="evolution" className="flex items-center gap-2">
            <TreeDeciduous className="w-4 h-4" />
            Evolution
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Community
          </TabsTrigger>
          <TabsTrigger value="ethics" className="flex items-center gap-2">
            <Scale className="w-4 h-4" />
            Ethics
          </TabsTrigger>
        </TabsList>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card className="p-4">
            <BiosphereSimulator />
          </Card>

          <div className="space-y-4">
            <TabsContent value="species" className="m-0">
              <SpeciesAdaptation speciesId={activeSpecies} />
            </TabsContent>
            <TabsContent value="environment" className="m-0">
              <EnvironmentalAnalyzer speciesId={activeSpecies} />
            </TabsContent>
            <TabsContent value="evolution" className="m-0">
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-2">Evolution Pathways</h3>
                <p className="text-muted-foreground">Coming soon: Interactive evolution tree visualization</p>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default EvolutionExplorer;