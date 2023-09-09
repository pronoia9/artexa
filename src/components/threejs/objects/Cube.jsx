'use client';

import { Float, useScroll } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

import { dataStore, isDarkTheme } from '@/utils';

export const Cube = ({ nodes, materials, ...props }) => {
  const { theme } = dataStore((store) => ({ theme: store.theme }));
  const scroll = useScroll();

  return (
    <motion.group name='Cube' position={[0.01, 2.14, -0.01]} scale={0.25} {...props}>
      <Float
        key={`cube-float-${scroll.offset}`}
        speed={scroll.offset === 0 ? 5 : 0} // Animation speed, defaults to 1
        rotationIntensity={0.25} // XYZ rotation intensity, defaults to 1
        floatIntensity={3} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <mesh name='Cube_1' geometry={nodes.Cube_1.geometry} material={nodes.Cube_1.material}>
          <meshStandardMaterial color={`#${isDarkTheme(theme) ? 'FFF3FF' : 'FFF3DD'}`} />
        </mesh>
        <mesh name='Cube_2' geometry={nodes.Cube_2.geometry} material={nodes.Cube_2.material}>
          <meshStandardMaterial color={`#${isDarkTheme(theme) ? 'B63C3C' : 'CF504A'}`} />
        </mesh>
      </Float>
    </motion.group>
  );
};
