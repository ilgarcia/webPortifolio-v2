"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";

import Particles from "@/components/Particles";

function CanvasAnimation() {
  const mouse = useRef([0, 0]);

  return (
    <Canvas linear dpr={[1, 2]} camera={{ fov: 100, position: [0, 0, 80] }}>
      <fog attach="fog" args={["#6366F1", 10, 150]} />
      <ambientLight intensity={1} />
      <Particles count={5000} mouse={mouse} />
    </Canvas>
  );
}

export default CanvasAnimation;
