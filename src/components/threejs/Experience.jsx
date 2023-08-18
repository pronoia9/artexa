'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, OrbitControls, ScrollControls, Environment, Sky, Stars, Cloud, useScroll } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import { useControls } from 'leva';
import { styled } from 'styled-components';
import { MotionConfig, motion } from 'framer-motion';
import { MotionCanvas, motion as motion3d } from 'framer-motion-3d';

import { SVGs, SectionTitle } from '@/components';
import { Room } from '@/components/threejs';
import { fadeIn } from '@/utils';

export const Experience = ({ scrollRef }) => {
  return (
    <Container
      // !---------------------------------------------------------------------------------------------------------------------
      initial='hidden'
      animate='visible'
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { type: 'tween', duration: 1, delay: 2, } }
      }}
      // !---------------------------------------------------------------------------------------------------------------------
    >
      <MotionConfig transition={{ type: 'spring' }}>
        <MotionCanvas dpr={[1, 2]} gl={{ antialias: true }} shadows={false}>
          <Suspense fallback={null}>
            <ScrollControls pages={3}>
              <Room />
            </ScrollControls>
          </Suspense>
          <Effects />
        </MotionCanvas>
        <Canvas />
      </MotionConfig>
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

const Scene = ({ scrollRef, ...props }) => {
  // const scroll = useScroll();
  // const [show, setShow] = useState(false);

  // const { position } = useControls('scene', {
  //   position: { value: [-40, -20, 0], step: 0.1 },
  // });

  // useFrame((state, delta) => {
  //   const offset = Math.round(1 - scroll.offset);
  //   console.log(offset);
  // });

  return (
    <>
      {/* <ScrollControls pages={6} damping={0.1}> */}
      {/* <Center> */}
      <Model scrollRef={scrollRef} {...props} />
      {/* </Center> */}
      {/* </ScrollControls> */}
    </>
  );
};

const Effects = () => {
  return (
    <>
      {/* <color attach='background' args={['#191923']} /> */}
      {/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} /> */}
      {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}
      {/* <Sky sunPosition={[100, 20, 100]} /> */}
      {/* <Cloud opacity={0.5} speed={0.8} width={10} depth={2.5} segments={20} /> */}
      <Environment preset='apartment' />
      {/* <EffectComposer>
        <Bloom intensity={1.0} luminanceThreshold={0.9} luminanceSmoothing={0.025} mipmapBlur={true} />
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} />
      </EffectComposer> */}
    </>
  );
};
