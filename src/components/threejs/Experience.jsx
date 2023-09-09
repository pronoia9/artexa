'use client';

import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, ScrollControls } from '@react-three/drei';
import { Leva } from 'leva';
import { css, keyframes, styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SVGs } from '@/components';
import { Scene, Effects } from '@/components/threejs';
import { rem, sceneMotion } from '@/utils';

export const Experience = () => {
  const cubeRef = useRef();
  // const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <Container {...sceneMotion.container} $cube={cubeRef.current}>
      <div className='down'>
        <span>
          <SVGs type='down' />
        </span>
      </div>

      <div className='leva-panel'>
        <Leva collapsed />
      </div>

      <Canvas dpr={[1, 2]} gl={{ antialias: true }} flat>
        <Suspense fallback={null}>
          <ScrollControls pages={3}>
            <Scene cubeRef={cubeRef} />
          </ScrollControls>
          <Effects />
          <Preload all />
        </Suspense>
      </Canvas>
    </Container>
  );
};

const bounce = keyframes`
  0%   { transform: translateY(-4px) }
  100% { transform: translateY(4px) }
`;

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;

  .down {
    position: absolute;
    bottom: 5%;
    left: calc(50% - 1rem);
    width: 2rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--c-font-1);
    border-radius: ${rem(45)};

    svg {
      width: 1rem;
      animation: ${bounce} 0.5s ease-in alternate infinite;
    }
  }

  ${({ $cube }) => css`
    .down       { display: ${($cube === 'initial' || $cube === undefined) ? '' : 'none'}; }
    .leva-panel { display: ${$cube === 'hidden' ? '' : 'none'}; }
  `}
`;
