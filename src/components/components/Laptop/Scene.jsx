import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { styled } from 'styled-components';
import { degToRad } from 'three/src/math/MathUtils';
import { MotionConfig, m } from 'framer-motion';
import { LayoutCamera, MotionCanvas, motion } from 'framer-motion-3d';

import { Laptop } from '../..';
import { dataStore } from '../../../store/dataStore';
import { laptopMotion, sceneMotion } from '../../../utils';
import { useControls } from 'leva';

export const Scene = () => {
  const { laptopOpen, toggleLaptopOpen } = dataStore((state) => ({
    laptopOpen: state.laptopOpen,
    toggleLaptopOpen: state.toggleLaptopOpen,
  }));

  // const { cstart, cend } = useControls('camera', {
  //   cstart: { value: { x: 22.5, y: 13, z: -37 } },
  //   cend: { value: { x: 0, y: 0, z: -17 } },
  // });

  // const { scale, position, rotation } = useControls('laptop', {
  //   scale: { value: 50 },
  //   position: { value: [0, -4, 0] }, // [0, 0, 0]
  //   rotation: { value: [0, Math.PI, 0] }, // [0, 2, 0]
  // });

  return (
    <MotionConfig transition={{ duration: 4, ease: [0.54, 0.01, 0.61, 1] }}>
      <Container data-is-fullscreen={laptopOpen} onClick={() => 'setFullscreen(!isFullscreen)'}>
        <m.h1 layout children='<LayoutCamera />' />
        <Container className='container' layout>
          <Container>
            <MotionCanvas dpr={[1, 2]}>
              <motion.group initial={false} animate={laptopOpen ? 'open' : 'close'}>
                {/* Camera / Controls */}
                <OrbitControls enablePan={false} enableRotate={false} />
                <LayoutCamera
                  // initial={false}
                  // animate={!laptopOpen ? { ...cstart, rotateY: degToRad(90), fov: 35 } : { ...cend, fov: 10 }}
                  variants={{
                    close: {
                      x: 22.5,
                      y: 13,
                      z: -37,
                      rotateY: degToRad(90),
                      fov: 35,
                      transition: {
                        duration: 4,
                        ease: [0.54, 0.01, 0.61, 1],
                        x: { type: 'tween', delay: 1, duration: 3, ease: [0.54, 0.01, 0.61, 1] },
                        y: { type: 'tween', delay: 1, duration: 3, ease: [0.54, 0.01, 0.61, 1] },
                      },
                    },
                    open: {
                      x: 0,
                      y: 0,
                      z: -1,
                      fov: 10,
                      transition: {
                        duration: 4,
                        ease: [0.54, 0.01, 0.61, 1],
                        z: { type: 'tween', delay: 2, duration: 3, ease: [0.54, 0.01, 0.61, 1] },
                      },
                    },
                  }}
                />
                {/* Lights */}
                <motion.pointLight position={[10, 10, 10]} intensity={1.5} color='#f0f0f0' />
                {/* Shadows */}
                <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={50} blur={1.75} far={4.5} />
                {/* Model */}

                <Laptop
                  onClick={(e) => (e.stopPropagation(), toggleLaptopOpen())}
                  {...laptopMotion(laptopOpen).container}
                  scale={50}
                  position={[0, -4, 0]}
                  rotation={[0, Math.PI, 0]}
                  // animate={!laptopOpen ? { x: 0, y: -4, z: 0 } : { x: 0, y: -5.5, z: 0 }}
                  variants={{
                    close: { y: -4, z: 0 },
                    open: {
                      y: -5.5,
                      // z: -15,
                      transition: {
                        y: { delay: 1, duration: 2, ease: [0.54, 0.01, 0.61, 1] },
                        // z: { delay: 2, duration: 3, ease: [0.54, 0.01, 0.61, 1] },
                      },
                    },
                  }}
                />
                {/* Environment */}
                <Environment preset='city' />
              </motion.group>
            </MotionCanvas>
            <Canvas style={{ display: 'none' }} />
          </Container>
        </Container>
      </Container>
    </MotionConfig>
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
