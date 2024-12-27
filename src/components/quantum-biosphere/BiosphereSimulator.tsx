import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { ErrorBoundary } from "react-error-boundary";
import * as THREE from "three";

const Planet = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useEffect(() => {
    console.log("Planet component mounted");
    if (meshRef.current) {
      meshRef.current.geometry.computeBoundingSphere();
    }
    return () => console.log("Planet component unmounted");
  }, []);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial>
        <color attach="value" args={["#4444aa"]} />
      </meshStandardMaterial>
    </mesh>
  );
};

const Scene = () => {
  console.log("Rendering Scene component");

  useEffect(() => {
    console.log("Scene component mounted");
    return () => {
      console.log("Scene component unmounted");
    };
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Planet />
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        fade
      />
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

const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-background">
    <p className="text-foreground">Loading 3D scene...</p>
  </div>
);

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
  
  useEffect(() => {
    console.log("BiosphereSimulator mounted");
    return () => {
      console.log("BiosphereSimulator unmounted - cleaning up");
    };
  }, []);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Canvas
          camera={{ 
            position: [0, 0, 4], 
            fov: 45,
            near: 0.1,
            far: 1000
          }}
          style={{ background: 'rgb(2,0,36)' }}
          gl={{ 
            antialias: true,
            alpha: false
          }}
        >
          <Suspense fallback={<LoadingFallback />}>
            <Scene />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default BiosphereSimulator;