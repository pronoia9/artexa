'use client';

import { Suspense } from 'react';
import { ScrollControls, Environment, Stars, useProgress } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { MotionCanvas } from 'framer-motion-3d';

import { Extend, Room } from '@/components/threejs';
import { sceneMotion } from '@/utils';

export const Experience = () => {
  // const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <Container {...sceneMotion.container}>
      <MotionCanvas dpr={[1, 2]} gl={{ antialias: true }} flat>
        <Extend />
        <Suspense fallback={null}>
          <ScrollControls pages={3}>
            <Room />
          </ScrollControls>
          <Effects />
        </Suspense>
      </MotionCanvas>
    </Container>
  );
};

const Container = styled(motion.div)`
  &,
  canvas {
    width: 100%;
    height: 100%;
  }
`;

const Effects = () => {
  // const { theme } = dataStore((state) => ({ theme: state.theme }));
  return (
    <>
      <color attach='background' args={['#1e1e28']} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Environment files='/3d/christmas_photo_studio_04_1k.hdr' />
      {/* <EffectComposer>
        <Bloom intensity={0.25} luminanceThreshold={0.9} luminanceSmoothing={0.025} mipmapBlur={true} />
      </EffectComposer> */}
    </>
  );
};
