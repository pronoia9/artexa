import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { styled } from 'styled-components';
import { motion } from 'framer-motion-3d';
import { m } from 'framer-motion';

import { Laptop } from '../..';
import { dataStore } from '../../../store/dataStore';
import { laptopMotion, sceneMotion } from '../../../utils';

export const Scene = () => {
  const { laptopOpen, toggleLaptopOpen } = dataStore((state) => ({
    laptopOpen: state.laptopOpen,
    toggleLaptopOpen: state.toggleLaptopOpen,
  }));

  return (
    <Container {...sceneMotion()}>
      <Canvas dpr={[1, 2]} camera={{ position: [22.5, 13, -37], fov: 35 }}>
        {/* Controls */}
        <OrbitControls />
        {/* Lights */}
        <motion.pointLight position={[10, 10, 10]} intensity={1.5} color='#f0f0f0' />
        {/* Shadows */}
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={50} blur={1.75} far={4.5} />
        {/* Model */}
        <Suspense fallback={null}>
          <motion.group {...laptopMotion(laptopOpen).container} rotation={[0, Math.PI, 0]}>
            <Laptop scale={50} onClick={(e) => (e.stopPropagation(), toggleLaptopOpen())} />
            <Environment preset='city' />
          </motion.group>
        </Suspense>
      </Canvas>
    </Container>
  );
};

const Container = styled(m.div)`
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
