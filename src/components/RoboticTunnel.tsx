"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const RoboticTunnel = ({ progress }: { progress: React.MutableRefObject<number> }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 40;

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate ring data
  const rings = useMemo(() => {
    return new Array(count).fill(0).map((_, i) => ({
      z: -i * 2,
      rotation: Math.random() * Math.PI,
      speed: (Math.random() - 0.5) * 0.02
    }));
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const p = progress.current;
    const time = state.clock.getElapsedTime();

    rings.forEach((ring, i) => {
      // Move rings forward based on scroll and time
      let z = ring.z + (p * 50);
      
      // Loop rings
      if (z > 10) z -= 80;
      
      dummy.position.set(0, 0, z);
      dummy.rotation.z = ring.rotation + time * ring.speed;
      
      // Scale based on distance to camera
      const s = Math.max(0.1, 1 - (Math.abs(z) / 40));
      dummy.scale.set(s, s, 1);
      
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group>
      {/* Solid Rings */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <torusGeometry args={[10, 0.05, 16, 100]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.1} />
      </instancedMesh>

      {/* Wireframe Grid / More Robotic Feel */}
      <instancedMesh args={[undefined, undefined, count]}>
        <torusGeometry args={[10.1, 0.1, 8, 40]} />
        <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.05} />
      </instancedMesh>
    </group>
  );
};

export default RoboticTunnel;
