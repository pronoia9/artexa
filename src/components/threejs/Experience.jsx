'use client';

import { Suspense } from 'react';
import { BufferAttribute, BufferGeometry, Points, Mesh, Group, PerspectiveCamera, OrthographicCamera, SphereGeometry } from 'three';
import { extend } from '@react-three/fiber';
import { ScrollControls, Environment, Sky, Stars, Cloud, useProgress } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { MotionCanvas } from 'framer-motion-3d';

import { Room } from '@/components/threejs';
import { sceneMotion } from '@/utils';

extend({ BufferAttribute, BufferGeometry, Points, Mesh, Group, PerspectiveCamera, OrthographicCamera, SphereGeometry });

export const Experience = () => {
  // const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <Container {...sceneMotion.container}>
      <MotionCanvas dpr={[1, 2]} gl={{ antialias: true }} flat>
        <Suspense fallback={null}>
          <ScrollControls pages={3}>
            <Room />
          </ScrollControls>

          {/* <color attach='background' args={['#191923']} /> */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}
          {/* <Sky sunPosition={[100, 20, 100]} /> */}
          {/* <Cloud opacity={0.5} speed={0.8} width={10} depth={2.5} segments={20} /> */}
          <Environment preset='apartment' />
          {/* <EffectComposer>
            <Bloom intensity={0.25} luminanceThreshold={0.9} luminanceSmoothing={0.025} mipmapBlur={true} />
          </EffectComposer> */}
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
