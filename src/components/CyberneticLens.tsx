"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const BLADE_COUNT = 12;

const CyberneticLens = ({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Geometry for a single blade
  // A tapered rectangle/trapezoid for the iris blade
  const bladeGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(2, 0);
    shape.lineTo(1.8, 1);
    shape.lineTo(-0.2, 1);
    shape.closePath();
    
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.1,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
    });
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const p = scrollProgress.current;
    const time = state.clock.getElapsedTime();

    // 1. Iris Opening Logic (0 -> 0.4 of total scroll)
    const openProgress = Math.min(1, p * 2.5); 
    
    for (let i = 0; i < BLADE_COUNT; i++) {
      const angle = (i / BLADE_COUNT) * Math.PI * 2;
      dummy.rotation.set(0, 0, angle);
      
      const irisRotation = openProgress * Math.PI * 0.4;
      dummy.rotation.z += irisRotation;

      const radius = 0.5 + openProgress * 4; 
      dummy.position.x = radius * Math.cos(angle);
      dummy.position.y = radius * Math.sin(angle);
      dummy.position.z = Math.sin(time + i) * 0.05; 

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    
    meshRef.current.instanceMatrix.needsUpdate = true;
    
    // 2. Fly-through / Zoom Logic (Full range p: 0 -> 1)
    if (groupRef.current) {
        // Massive scale up as we go deep
        const scale = 1 + p * 30;
        groupRef.current.scale.set(scale, scale, scale);
        
        const zPos = p * 20; // Move past camera
        groupRef.current.position.z = zPos;
        
        // Fade out significantly as we pass camera plane (around p=0.45)
        const opacity = p > 0.45 ? Math.max(0, 1 - (p - 0.45) * 6) : 1;
        if (meshRef.current.material instanceof THREE.Material) {
            meshRef.current.material.opacity = opacity;
            meshRef.current.material.transparent = true;
        }
        
        groupRef.current.rotation.z = time * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[bladeGeometry, undefined, BLADE_COUNT]}>
        <meshPhysicalMaterial 
          color="#111111"
          metalness={0.9}
          roughness={0.1}
          emissive="#00ffff"
          emissiveIntensity={0.2}
          clearcoat={1}
          transparent={true}
        />
      </instancedMesh>
      
      {/* Central "eye" glow behind the blades */}
      <mesh position={[0, 0, -1]}>
        <circleGeometry args={[2, 32]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.15} />
      </mesh>
      
      {/* Decorative rings - also zoom and fade */}
      {[1, 1.2, 1.4].map((r, i) => (
        <mesh key={i} rotation={[0, 0, 0]} position={[0,0,-0.5]}>
          <ringGeometry args={[r * 2.5, r * 2.5 + 0.02, 64]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
};

export default CyberneticLens;
