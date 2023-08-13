import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, ScrollControls } from '@react-three/drei';

import { Lights } from './Lights';
import { Model } from './Model';
import { Effects } from './Effects';
import { useControls } from 'leva';

export const Scene = () => {
  const { scale, position, rotation } = useControls('model', {
    scale: { value: 1 },
    position: { value: [0, 0, 0], step: 0.1 },
    rotation: { value: [0, 6.5, 0], step: 0.1 },
  });

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [29, 14, 12], fov: 35 }} gl={{ antialias: true }}>
      {/* <OrbitControls /> */}
      <Lights />
      <ScrollControls>
        <Model scale={scale} position={position} rotation={rotation} />
      </ScrollControls>
      <Effects />
    </Canvas>
  );
};
