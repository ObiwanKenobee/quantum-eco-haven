import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";

const Planet = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#4CAF50" 
        wireframe={true}
        transparent={false}
        opacity={1}
      />
    </mesh>
  );
};

const BiosphereSimulator = () => {
  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden border border-border">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.0} />
          <Planet />
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0}
            fade={true}
          />
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={10}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BiosphereSimulator;