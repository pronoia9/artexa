import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a as three } from '@react-spring/three';
import { a as web } from '@react-spring/web';
import { keyframes, styled } from 'styled-components';

import { Laptop } from '.';
import { dataStore } from '../../../store/dataStore';

export const Scene = () => {
  const { laptopOpen, setLaptopOpen } = dataStore((state) => ({
    laptopOpen: state.laptopOpen,
    setLaptopOpen: state.setLaptopOpen,
  }));
  const [open, setOpen] = useState(false);
  const props = useSpring({ open: Number(open) });

  return (
    <Container>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 10, -30], fov: 35 }}>
        <three.pointLight position={[10, 10, 10]} intensity={1.5} color={props.open.to([0, 1], ['#f0f0f0', '#d25578'])} />
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
            <Laptop open={open} hinge={props.open.to([0, 1], [-3.109, -4.70])} scale={6} />
          </group>
          <Environment preset='city' />
        </Suspense>
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
        <OrbitControls />
      </Canvas>
    </Container>
  );
};

const bgAnimation = keyframes`
  0% {  background-position: left; }
  100% {  background-position: right; }
`;

const Container = styled(web.main)`
  width: 100vw;
  min-width: 100vw;
  height: 10vh;
  min-height: 100vh;
  background: var(--c-bg);
  background-image: linear-gradient(45deg, var(--c-accent-1), var(--c-accent-2), var(--c-accent-3), var(--c-accent-4), var(--c-accent-5));
  background-size: 400%;
  animation: ${bgAnimation} 20s infinite alternate;
`;