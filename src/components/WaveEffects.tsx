"use client";

import React, { useRef } from "react";
import { Object3DNode, extend, useFrame } from "@react-three/fiber";

import { Effects } from "@react-three/drei";
import { FilmPass, WaterPass } from "three-stdlib";

extend({ FilmPass, WaterPass });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      waterPass: Object3DNode<WaterPass, typeof WaterPass>;
      filmPass: Object3DNode<FilmPass, typeof FilmPass>;
    }
  }
}

function WaveEffects() {
  const water = useRef<any>();

  useFrame((state) => (water.current.time = state.clock.elapsedTime * 1));

  return (
    <Effects disableGamma>
      <waterPass ref={water} factor={0.5} />
      <filmPass args={[0.2, 0.5, 1500, false]} />
    </Effects>
  );
}

export default WaveEffects;
