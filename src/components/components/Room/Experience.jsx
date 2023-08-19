import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, ScrollControls } from '@react-three/drei';

import { Scene } from './Scene';
import { Effects } from './Effects';

export const Experience = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 35, position: [25, 25, 25], zoom: 65 }} gl={{ antialias: true }} shadows={false} orthographic>
      <OrbitControls />
      <ScrollControls pages={6} damping={0.1}>
        <Center>
          <Scene />
        </Center>
      </ScrollControls>
      <Effects />
    </Canvas>
  );
};
