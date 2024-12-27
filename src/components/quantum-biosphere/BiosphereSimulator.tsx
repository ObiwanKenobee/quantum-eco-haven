import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Planet = () => {
  console.log("Rendering Planet component");
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

const Scene = () => {
  console.log("Rendering Scene component");
  return (
    <>
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
    </>
  );
};

const ErrorFallback = ({ error }: { error: Error }) => {
  console.error("BiosphereSimulator error:", error);
  return (
    <div className="w-full h-full flex items-center justify-center bg-red-50 text-red-500 p-4">
      <p>Error loading 3D scene. Please refresh the page.</p>
    </div>
  );
};

const BiosphereSimulator = () => {
  console.log("Rendering BiosphereSimulator");
  
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border border-border">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Canvas
          camera={{ 
            position: [0, 0, 4], 
            fov: 45,
            near: 0.1,
            far: 1000
          }}
          style={{ background: 'rgb(2,0,36)' }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default BiosphereSimulator;