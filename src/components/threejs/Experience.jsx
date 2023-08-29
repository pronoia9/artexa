'use client';

import { Suspense } from 'react';
import { ScrollControls, useProgress } from '@react-three/drei';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { MotionCanvas } from 'framer-motion-3d';

import { Extend, Camera, Room, Bloom, Emissives, Effects } from '@/components/threejs';
import { sceneMotion } from '@/utils';

export const Experience = () => {
  // const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <Container {...sceneMotion.container}>
      <MotionCanvas dpr={[1, 2]} gl={{ antialias: true }} flat>
        <Extend />
        <Suspense fallback={null}>
          <ScrollControls pages={3}>
            <Camera />
            <Room />
            <Bloom>
              <Emissives />
            </Bloom>
          </ScrollControls>
          <Effects />
        </Suspense>
      </MotionCanvas>
    </Container>
  );
};

const Container = styled(motion.div)`
  &, canvas {
    width: 100%;
    height: 100%;
  }
`;
