import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Helper for linear interpolation
const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t;
};

// Helper for remapping ranges (like useTransform)
const remap = (value: number, inputMin: number, inputMax: number, outputMin: number, outputMax: number) => {
  if (value < inputMin) return outputMin;
  if (value > inputMax) return outputMax;
  const t = (value - inputMin) / (inputMax - inputMin);
  return lerp(outputMin, outputMax, t);
};

const ShatteredPortal = ({ progress }: { progress: React.MutableRefObject<number> }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 600; 

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate data 
  const shards = useMemo(() => {
    return new Array(count).fill(0).map((_, i) => {
      const isCap = i < count * 0.1; 
      let r, theta, z;

      if (isCap) {
        r = Math.sqrt(Math.random()) * 3; 
        theta = Math.random() * Math.PI * 2;
        z = (Math.random() - 0.5) * 0.5; 
      } else {
        r = 4 + Math.random() * 2; 
        theta = Math.random() * Math.PI * 2;
        z = -Math.random() * 50; 
      }

      return {
        isCap,
        polar: { r, theta },
        zBase: z,
        rotSpeed: [
            (Math.random() - 0.5) * 0.2, 
            (Math.random() - 0.5) * 0.2, 
            (Math.random() - 0.5) * 0.2
        ],
        scale: Math.random() * 0.4 + 0.1,
      };
    });
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Read the current scroll progress directly from the ref (driven by GSAP)
    const p = progress.current; 
    const time = state.clock.getElapsedTime();

    // Calculate animation values based on 'p'
    // 1. Cap Open: 0 to 0.1 scroll -> 0 to 10 units
    const openVal = remap(p, 0, 0.1, 0, 10);
    
    // 2. Fly Through: 0 to 1 scroll -> 0 to 80 units
    const flyVal = remap(p, 0, 1, 0, 80);

    shards.forEach((shard, i) => {
        let { r, theta } = shard.polar;
        let z = shard.zBase;

        if (shard.isCap) {
            r += openVal;
        } 
        
        z += flyVal;

        dummy.position.x = r * Math.cos(theta);
        dummy.position.y = r * Math.sin(theta);
        dummy.position.z = z;

        dummy.rotation.x = time * shard.rotSpeed[0];
        dummy.rotation.y = time * shard.rotSpeed[1];
        dummy.rotation.z = time * shard.rotSpeed[2];

        dummy.scale.setScalar(shard.scale);

        dummy.updateMatrix();
        meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial 
        color="#aaccff"
        roughness={0.1}
        metalness={0.8}
        transmission={0.5} 
        thickness={1}
        ior={1.5}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </instancedMesh>
  );
};

export default ShatteredPortal;
