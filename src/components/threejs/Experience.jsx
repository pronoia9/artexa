'use client';

import { Suspense } from 'react';
import { ScrollControls, Environment, Stars, useProgress, Sky, Cloud } from '@react-three/drei';
// import { useControls } from 'leva';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { MotionCanvas } from 'framer-motion-3d';

import { Extend, Room } from '@/components/threejs';
import { dataStore, isDarkTheme, sceneMotion } from '@/utils';

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
  const { theme } = dataStore((state) => ({ theme: state.theme }));

  return (
    <>
      <group key={`scene_effects-${theme}`}>
        {isDarkTheme(theme) ? (
          <>
            <color attach='background' args={['#1e1e28']} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          </>
        ) : (
          <>
            <Sky sunPosition={[100, 20, 100]} />
            <group position={[-9.1, -4.1, -14.1]} /*{...useControls({ position: { value: [-7, -3.5, -10], step: 0.1 } })}*/>
              <Cloud opacity={0.5} speed={0.25} width={10} depth={2.5} segments={20} />
            </group>
          </>
        )}
      </group>

      <Environment files='/3d/christmas_photo_studio_04_1k.hdr' />
    </>
  );
};
