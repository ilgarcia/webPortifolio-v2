"use client"

import { useCallback, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, "./circle.png");
  const bufferRef = useRef<any>();

  let t = 0;
  let f = 0.002;
  let a = 3;
  const graph = useCallback(
    (x: number, z: number) => {
      return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    },
    [t, f, a]
  );

  const count = 100;
  const sep = 3;
  let positions = useMemo(() => {
    let positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph]);

  useFrame(() => {
    t += 15;

    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x3730a3}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.6}
        opacity={1}
      />
    </points>
  );
}

function WaveAnimation() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 75, position: [100, 10, 0] }}>
      <fog attach="fog" args={["#1e1b4b", 10, 150]} />
      <ambientLight intensity={0.6} />
      <Points />
    </Canvas>
  );
}

export default WaveAnimation;

