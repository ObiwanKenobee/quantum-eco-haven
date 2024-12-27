import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Mesh } from "three";
import { ErrorBoundary } from "react-error-boundary";

const Planet = () => {
  const meshRef = useRef<Mesh>(null);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial color={0x00ff00} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.0} />
      <Planet />
      <OrbitControls enableDamping dampingFactor={0.05} />
    </Suspense>
  );
};

const ErrorFallback = () => (
  <div className="text-red-500 p-4">
    Error loading 3D scene. Please refresh the page.
  </div>
);

const BiosphereSimulator = () => {
  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden border border-border">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <Scene />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default BiosphereSimulator;