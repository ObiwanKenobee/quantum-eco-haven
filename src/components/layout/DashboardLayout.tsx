import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Globe, Dna, Database, Shield, ChartBar, Users, Trees, Rocket } from "lucide-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { toast } = useToast();

  const navItems = [
    { title: "Quantum Biosphere", icon: Globe },
    { title: "Evolution Explorer", icon: Dna },
    { title: "Ecosystem Ledger", icon: Database },
    { title: "Conservation Hub", icon: Shield },
    { title: "Analytics", icon: ChartBar },
    { title: "Community", icon: Users },
    { title: "Resources", icon: Trees },
    { title: "Missions", icon: Rocket },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        className="w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border h-screen fixed"
      >
        <div className="p-4">
          <h1 className="text-xl font-bold mb-8">Genesis Ark Guardian</h1>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.title}
                className="w-full text-left p-2 rounded hover:bg-sidebar-accent transition-colors flex items-center gap-2"
                onClick={() => {
                  toast({
                    title: "Coming Soon",
                    description: `${item.title} module is under development`,
                  });
                }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </button>
            ))}
          </nav>
        </div>
      </motion.aside>

      <main className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
        <header className="h-16 border-b border-border flex items-center justify-between px-6">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-accent rounded-md transition-colors"
          >
            ☰
          </button>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-accent rounded-full transition-colors">
              🔔
            </button>
            <button className="p-2 hover:bg-accent rounded-full transition-colors">
              👤
            </button>
          </div>
        </header>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;