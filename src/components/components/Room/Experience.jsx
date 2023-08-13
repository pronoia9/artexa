import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';

import { Lights } from './Lights';
import { Scene } from './Scene';
import { Effects } from './Effects';

export const Experience = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 35 }} gl={{ antialias: true }} shadows={false}>
      <OrbitControls />
      <Lights />
      <ScrollControls pages={6} damping={0.1}>
        <Scene />
      </ScrollControls>
      <Effects />
    </Canvas>
  );
};
