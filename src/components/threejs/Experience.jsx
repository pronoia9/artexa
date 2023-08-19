'use client';

import { Suspense, useEffect, useState } from 'react';
import { BufferAttribute, BufferGeometry, Points } from 'three';
import { extend, useFrame } from '@react-three/fiber';
import { ScrollControls, Environment, Sky, Stars, Cloud, useProgress, useScroll } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { MotionCanvas, motion as motion3d } from 'framer-motion-3d';

import { Room } from '@/components/threejs';

extend({ BufferAttribute, BufferGeometry, Points });

export const Experience = () => {
  // const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <Container
      // !---------------------------------------------------------------------------------------------------------------------
      initial='hidden'
      animate='visible'
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { type: 'tween', duration: 1, delay: 2, delayChildren: 1 } },
      }}
      // !---------------------------------------------------------------------------------------------------------------------
    >
      <MotionCanvas dpr={[1, 2]} gl={{ antialias: true }} shadows={true}>
        <Suspense fallback={null}>
          <ScrollControls pages={3}>
            <Scene />
          </ScrollControls>

          {/* <color attach='background' args={['#191923']} /> */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}
          {/* <Sky sunPosition={[100, 20, 100]} /> */}
          {/* <Cloud opacity={0.5} speed={0.8} width={10} depth={2.5} segments={20} /> */}
          <Environment preset='apartment' />
          <EffectComposer>
            <Bloom intensity={0.25} luminanceThreshold={0.9} luminanceSmoothing={0.025} mipmapBlur={true} />
          </EffectComposer>
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

const Scene = () => {
  const [showCube, setShowCube] = useState(true);
  const scroll = useScroll();

  // reset scroll offset to the start once cube is hidden
  useEffect(() => void (!showCube && (scroll.offset = 0)), [showCube]);

  useFrame((state) => {
    if (showCube && scroll.offset > 0) setShowCube(false);
  });

  return (
    <>
      <Room showCube={showCube} />
    </>
  );
};
