import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sparkles, TorusKnot } from "@react-three/drei";
import { useRef } from "react";

function Core() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.18;
    ref.current.rotation.y += delta * 0.28;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.45} floatIntensity={1.1}>
      <TorusKnot ref={ref} args={[1.35, 0.42, 160, 32]} scale={1.05}>
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.8}
          roughness={0.16}
          emissive="#24104d"
          emissiveIntensity={0.7}
        />
      </TorusKnot>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-90">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 1.6]}>
        <ambientLight intensity={0.45} />
        <pointLight position={[3, 3, 4]} intensity={20} color="#22d3ee" />
        <pointLight position={[-3, -2, 3]} intensity={16} color="#8b5cf6" />
        <Core />
        <Sparkles count={90} scale={8} size={2.2} speed={0.25} color="#ffffff" />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}