import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const Planet = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial color={0x00ff00} />
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
          <pointLight position={[10, 10, 10]} intensity={1.0} />
          <Planet />
          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BiosphereSimulator;