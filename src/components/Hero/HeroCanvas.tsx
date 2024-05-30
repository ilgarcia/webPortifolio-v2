"use client";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";

export default function HeroCanvas() {
  return (
    <div className="absolute top-0 left-0  w-full h-full -z-20 animate-surge">
      <Canvas dpr={[1, 2]} camera={{ fov: 100, position: [0, 0, 30] }}>
        <Suspense fallback={null}>
          <fog attach="fog" args={["#1e1b4b", 0, 60]} />
          <ambientLight intensity={0.8} />
          <Particles count={1000} />
        </Suspense>
      </Canvas>
    </div>
  );
}
