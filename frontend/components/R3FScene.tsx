"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function R3FScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      {/* Sample placeholder cube */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <ambientLight intensity={1} />
      <OrbitControls />
    </Canvas>
  );
}
