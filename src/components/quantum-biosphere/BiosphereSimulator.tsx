import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Mesh } from "three";

const Planet = () => {
  const meshRef = useRef<Mesh>(null);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="green" />
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
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Planet />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BiosphereSimulator;