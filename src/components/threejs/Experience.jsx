'use client';

import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, ScrollControls } from '@react-three/drei';
import { Leva } from 'leva';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SVGs } from '@/components';
import { Scene, Effects } from '@/components/threejs';
import { sceneMotion } from '@/utils';

export const Experience = () => {
  const scrollRef = useRef();
  // const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <Container {...sceneMotion.container} $offset={scrollRef.current?.offset}>
      {/* <SVGs type='down' /> */}

      <Canvas dpr={[1, 2]} gl={{ antialias: true }} flat>
        <Suspense fallback={null}>
          <ScrollControls pages={3}>
            <Scene scrollRef={scrollRef} />
          </ScrollControls>
          <Effects />
          <Preload all />
        </Suspense>
      </Canvas>

      <div className='leva-panel'>
        <Leva collapsed />
      </div>
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

  .leva-panel {
    display: ${({ $offset }) => ($offset > 0 ? '' : 'none')};
  }
`;
