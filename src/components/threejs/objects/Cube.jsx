'use client';

import { motion } from 'framer-motion-3d';

import { dataStore, isDarkTheme } from '@/utils';

export const Cube = ({ nodes, materials, ...props }) => {
  const { theme } = dataStore((store) => ({ theme: store.theme }));

  return (
    <motion.group name='Cube' position={[0.01, 2.14, -0.01]} scale={0.25} {...props}>
      <mesh name='Cube_1' geometry={nodes.Cube_1.geometry} material={nodes.Cube_1.material}>
        <meshStandardMaterial color={`#${isDarkTheme(theme) ? 'FFF3FF' : 'FFF3DD'}`} />
      </mesh>
      <mesh name='Cube_2' geometry={nodes.Cube_2.geometry} material={nodes.Cube_2.material}>
        <meshStandardMaterial color={`#${isDarkTheme(theme) ? 'B63C3C' : 'CF504A'}`} />
      </mesh>
    </motion.group>
  );
};
