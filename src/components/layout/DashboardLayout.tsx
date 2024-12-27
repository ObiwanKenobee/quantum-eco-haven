import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        className="w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border h-screen fixed"
      >
        <div className="p-4">
          <h1 className="text-xl font-bold mb-8">Genesis Ark Guardian</h1>
          <nav className="space-y-2">
            <button className="w-full text-left p-2 rounded hover:bg-sidebar-accent transition-colors">
              Quantum Biosphere
            </button>
            <button className="w-full text-left p-2 rounded hover:bg-sidebar-accent transition-colors">
              Nano-Ark Fleet
            </button>
            <button className="w-full text-left p-2 rounded hover:bg-sidebar-accent transition-colors">
              Evolution Tracker
            </button>
          </nav>
        </div>
      </motion.aside>

      {/* Main Content */}
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