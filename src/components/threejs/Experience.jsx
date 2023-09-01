'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, ScrollControls, useProgress } from '@react-three/drei';
import { Leva } from 'leva';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Scene, Effects } from '@/components/threejs';
import { sceneMotion } from '@/utils';

export const Experience = () => {
  // const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <Container {...sceneMotion.container}>
      <Leva collapsed />
      <Canvas dpr={[1, 2]} gl={{ antialias: true }} flat>
        <Suspense fallback={null}>
          <ScrollControls pages={3}>
            <Scene  />
          </ScrollControls>
          <Effects />
          <Preload all />
        </Suspense>
      </Canvas>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
