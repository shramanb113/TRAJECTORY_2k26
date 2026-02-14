"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { MotionValue, useTransform } from "motion/react";

const NeuralCore = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create particle data
  const particleCount = 8000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        // Sphere distribution
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const r = 1.5 + Math.random() * 0.5; // Radius 1.5 to 2.0

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        pos[i * 3] = x;
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = z;
    }
    return pos;
  }, []);

  // Motion values
  const rotationSpeed = useTransform(scrollProgress, [0, 1], [0.1, 2.0]);
  const expansion = useTransform(scrollProgress, [0, 0.5, 1], [1, 5, 20]); // Massive expansion
  const zPosition = useTransform(scrollProgress, [0, 1], [0, 8]); // Fly through camera (cam is at 5)

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Rotation
    pointsRef.current.rotation.y = time * 0.05 + rotationSpeed.get();
    pointsRef.current.rotation.z = time * 0.02;

    // Breathing / Pulse effect
    const pulse = Math.sin(time * 2) * 0.05 + 1;
    
    // Apply expansion scale
    const scale = expansion.get() * pulse;
    pointsRef.current.scale.set(scale, scale, scale);
    
    // Fly through effect
    pointsRef.current.position.z = zPosition.get();
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#E65100"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
};

export default NeuralCore;
