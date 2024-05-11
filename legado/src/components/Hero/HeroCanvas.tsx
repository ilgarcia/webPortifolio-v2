"use client";

import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";

export function HeroCanvas({ ...props }) {
  return (
    <div {...props}>
      <Canvas
        linear
        dpr={[1, 2]}
        camera={{ fov: 100, position: [0, 0, 30] }}
        {...props}
      >
        <fog attach="fog" args={["#1e1b4b", 0, 60]} />
        <ambientLight intensity={0.8} />
        <Particles count={1000} />
      </Canvas>
    </div>
  );
}
