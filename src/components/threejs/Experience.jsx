'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, OrbitControls, ScrollControls, Environment, Sky, Stars, Cloud, useScroll } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import { useControls } from 'leva';
import { styled } from 'styled-components';
import { motion as m } from 'framer-motion';
import { LayoutCamera, MotionCanvas, motion } from 'framer-motion-3d';

import { SVGs, SectionTitle } from '@/components';
import { Model } from './Model';

export const Experience = () => {
  const scrollRef = useRef();

  return (
    <>
      <Canvas dpr={[1, 2]} gl={{ antialias: true }} shadows={false} >
        <Suspense fallback={null}>
          {/* <motion.group initial='hidden' animate='visible' variants={{ hidden: { scale: 0.1, x: 0, y: 0, z: 0 }, visible: { x: -4, y: -2, z: 0, }, }}> */}
          <ScrollControls pages={3}>
            <Model />
          </ScrollControls>
          {/* </motion.group> */}
        </Suspense>
        <Effects />
      </Canvas>
    </>
  );
};

const Container = styled(m.div)`
  position: relative;
  width: 100%;
  height: 100%;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  /* position: absolute;
  bottom: 2.5rem;
  left: 0;
  width: 100%;
  height: 50%; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  pointer-events: none; */

  div {
    width: fit-content !important;
  }

  span {
    position: absolute;
    bottom: 2.5rem;
    svg {
      fill: var(--c-font-1);
      width: 1rem !important;
      height: 1rem !important;
    }
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
