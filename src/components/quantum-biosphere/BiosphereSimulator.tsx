import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

const Planet = () => {
  return (
    <mesh position={new THREE.Vector3(0, 0, 0)} rotation={new THREE.Euler(0, 0, 0)}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color={new THREE.Color("#4CAF50")}
        wireframe={true}
        transparent={true}
        opacity={1}
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
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={["#000"]} />
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
            speed={1}
          />
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={10}
            makeDefault
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BiosphereSimulator;