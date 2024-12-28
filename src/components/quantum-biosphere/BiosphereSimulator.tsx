import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Planet = () => {
  console.log("Rendering Planet component"); // Debug log
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#4444aa"
        roughness={0.7}
        metalness={0.3}
      />
    </mesh>
  );
};

const Scene = () => {
  console.log("Rendering Scene component"); // Debug log
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.0} />
      <Planet />
      <OrbitControls 
        enableZoom={true}
        minDistance={2}
        maxDistance={10}
      />
    </>
  );
};

const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-background">
    <p className="text-foreground">Loading 3D scene...</p>
  </div>
);

const ErrorFallback = ({ error }: { error: Error }) => {
  console.error("BiosphereSimulator error:", error); // Debug log
  return (
    <div className="w-full h-full flex items-center justify-center bg-red-50 text-red-500 p-4">
      <p>Error loading 3D scene. Please refresh the page.</p>
    </div>
  );
};

const BiosphereSimulator = () => {
  console.log("Rendering BiosphereSimulator component"); // Debug log
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Canvas
          camera={{ 
            position: [0, 0, 5], 
            fov: 75 
          }}
        >
          <color attach="background" args={['#000000']} />
          <Suspense fallback={<LoadingFallback />}>
            <Scene />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default BiosphereSimulator;