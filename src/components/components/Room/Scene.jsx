import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';

import { Lights } from './Lights';
import { Model } from './Model';
import { Effects } from './Effects';

export const Scene = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 35 }} gl={{ antialias: true }} shadows={false}>
      <OrbitControls />
      <Lights />
      <ScrollControls pages={6} damping={0.1}>
        <Model />
      </ScrollControls>
      <Effects />
    </Canvas>
  );
};
