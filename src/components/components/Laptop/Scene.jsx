import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a as three } from '@react-spring/three';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Laptop } from '../..';
import { dataStore } from '../../../store/dataStore';
import { sceneMotion } from '../../../utils';

export const Scene = () => {
  return (
    <Container {...sceneMotion()}>
      <Canvas dpr={[1, 2]} camera={{ position: [22.5, 13, -37], fov: 35 }}>
        <SceneContents />
      </Canvas>
    </Container>
  );
};

export const SceneContents = () => {
  const { laptopOpen, toggleLaptopOpen } = dataStore((state) => ({
    laptopOpen: state.laptopOpen,
    toggleLaptopOpen: state.toggleLaptopOpen,
  }));
  const props = useSpring({ open: Number(laptopOpen), config: { duration: 1500 } });

  return (
    <>
      <three.pointLight position={[10, 10, 10]} intensity={1.5} color={props.open.to([0, 1], ['#f0f0f0', '#d25578'])} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} onClick={(e) => (e.stopPropagation(), toggleLaptopOpen())}>
          <Laptop hinge={props.open.to([0, 1], [0, -Math.PI / 2])} scale={30} position={[0, -4, 0]} />
        </group>
        <Environment preset='city' />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
      <OrbitControls />
    </>
  );
};

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
`;
