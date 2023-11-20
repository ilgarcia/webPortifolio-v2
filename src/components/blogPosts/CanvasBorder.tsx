import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";

const BeveledBorder: React.FC = () => {
  const lineRef = useRef<any>();

  // Animação (opcional)
  useFrame(() => {
    if (lineRef.current) {
      // Código de animação aqui (se necessário)
    }
  });

  const chamferSize = 20;
  const borderThickness = 1;

  // Pontos do contorno
  const points = [
    [0, 0, 0],
    [100, 0, 0],
    [100, 100 - chamferSize, 0],
    [100 - chamferSize, 100, 0],
    [0, 100, 0],
    [0, 0, 0],
  ];

  return (
    <line ref={lineRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          array={new Float32Array(points.flat())}
          count={points.length}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        attach="material"
        color="black"
        linewidth={borderThickness}
      />
    </line>
  );
};

function CanvasBorder() {
  return (
    <Canvas>
      <BeveledBorder />
    </Canvas>
  );
}

export default CanvasBorder;
