import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";

const Planet = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#4444aa"
        roughness={0.7}
        metalness={0.3}
      />
    </mesh>
  );
};

const BiosphereSimulator = () => {
  console.log("Rendering BiosphereSimulator");
  
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border border-border">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: 'rgb(2,0,36)' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Planet />
          <Stars radius={100} depth={50} count={5000} factor={4} />
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={7}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BiosphereSimulator;