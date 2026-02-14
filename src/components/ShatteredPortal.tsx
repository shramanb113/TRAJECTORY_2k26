"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { MotionValue, useTransform } from "motion/react";

const ShatteredPortal = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 150; // We can handle way more pieces with InstancedMesh!

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate data for each shard
  const shards = useMemo(() => {
    return new Array(count).fill(0).map((_, i) => {
      // Polar Coordinates for Tunnel
      const theta = Math.random() * Math.PI * 2;
      // Initial radius: mostly a wall (0-4), but some already slightly out
      const r = Math.sqrt(Math.random()) * 4; 
      
      const z = (Math.random() - 0.5) * 1; // Slight depth variation

      return {
        polar: { r, theta },
        zBase: z,
        // unique rotation speeds
        rotSpeed: [
            (Math.random() - 0.5) * 0.5, 
            (Math.random() - 0.5) * 0.5, 
            (Math.random() - 0.5) * 0.5
        ],
        scale: Math.random() * 0.3 + 0.1,
      };
    });
  }, []);

  // Motion: 
  // 1. Hole opening (Radius expansion)
  const holeRadius = useTransform(scrollProgress, [0, 0.2, 1], [0, 2, 8]); 
  // 2. Camera fly-through simulation (moving shards on Z)
  const zFly = useTransform(scrollProgress, [0, 1], [0, 10]);
  // 3. Twist effect
  const twist = useTransform(scrollProgress, [0, 1], [0, 2]);

  useFrame((state) => {
    if (!meshRef.current) return;

    const opening = holeRadius.get();
    const fly = zFly.get();
    const twistVal = twist.get();
    const time = state.clock.getElapsedTime();

    shards.forEach((shard, i) => {
        // 1. Calculate new Radius
        // The hole opens up, pushing shards radially
        let currentR = shard.polar.r + opening;
        
        // 2. Calculate Angle (add some twist based on radius or index)
        const currentTheta = shard.polar.theta + twistVal * (1 / (currentR + 0.1));

        // 3. Position
        dummy.position.x = currentR * Math.cos(currentTheta);
        dummy.position.y = currentR * Math.sin(currentTheta);
        
        // Fly through: move shards towards camera (which is +Z usually, or we move shards +Z)
        // Let's assume camera is at +Z, shards trigger moving +Z to pass "behind" camera or -Z?
        // Let's move shards +Z so they fly PAST the camera (at Z=5 or so)
        dummy.position.z = shard.zBase + fly;

        // 4. Rotation
        dummy.rotation.x = time * shard.rotSpeed[0] + fly * 0.5;
        dummy.rotation.y = time * shard.rotSpeed[1] + fly * 0.5;
        dummy.rotation.z = time * shard.rotSpeed[2];

        // 5. Scale
        dummy.scale.setScalar(shard.scale);

        dummy.updateMatrix();
        meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      {/* Use a simple geometry for all shards */}
      <dodecahedronGeometry args={[1, 0]} />
      
      {/* 
        OPTIMIZATION: Use standard MeshPhysicalMaterial instead of MeshTransmissionMaterial.
        It's much faster and still looks like glass/metal.
      */}
      <meshPhysicalMaterial 
        color="#ffffff"
        roughness={0.1}
        metalness={0.1}
        transmission={1} // Glass-like
        thickness={0.5} // Refraction volume
        ior={1.5}
        clearcoat={1}
        clearcoatRoughness={0}
      />
    </instancedMesh>
  );
};

export default ShatteredPortal;
