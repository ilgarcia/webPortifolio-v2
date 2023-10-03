import { Canvas } from "@react-three/fiber";

import Particles from "@/components/Particles";
import WaveEffects from "@/components/WaveEffects";

function CanvasAnimation() {

  return (
    <Canvas
      linear
      legacy
      dpr={[1, 2]}
      camera={{ fov: 100, position: [0, 0, 70] }}
    >
      <fog attach="fog" args={["#6366F1", 10, 150]} />
      <ambientLight intensity={0.7} />
      <Particles count={2000}  />

      <WaveEffects />
    </Canvas>
  );
}

export default CanvasAnimation;
