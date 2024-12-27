import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

const Planet = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color={0x4CAF50}
        wireframe={true}
      />
    </mesh>
  );
};

const BiosphereSimulator = () => {
  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden border border-border">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Planet />
          <Stars 
            radius={100}
            depth={50}
            count={5000}
            factor={4}
          />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BiosphereSimulator;