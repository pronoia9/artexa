import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a as three } from '@react-spring/three';
import { a as web } from '@react-spring/web';

import { Laptop } from '.';

export const Scene = () => {
  const [open, setOpen] = useState(false);
  const props = useSpring({ open: Number(open) });

  return (
    <web.main style={{ background: props.open.to([0, 1], ['#f0f0f0', '#d25578']) }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 10, -30], fov: 35 }}>
        <three.pointLight position={[10, 10, 10]} intensity={1.5} color={props.open.to([0, 1], ['#f0f0f0', '#d25578'])} />
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
            <Laptop open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
          </group>
          <Environment preset='city' />
        </Suspense>
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
        <OrbitControls />
      </Canvas>
    </web.main>
  );
};
