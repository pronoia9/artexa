'use client';

import { motion } from 'framer-motion-3d';

import { dataStore, isDarkTheme } from '@/utils';

export const Cube = ({ nodes, materials, children, ...props }) => {
  const { theme } = dataStore((store) => ({ theme: store.theme }));

  return (
    <motion.group name='Cube' position={[0, 2.44, 0]} scale={0.25} {...props}>
      <mesh name='Cube001' geometry={nodes.Cube001.geometry} material={nodes.Cube001.material}>
        <meshStandardMaterial color={`#${isDarkTheme(theme) ? 'B63C3C' : 'CF504A'}`} />
      </mesh>
      <mesh name='Cube001_1' geometry={nodes.Cube001_1.geometry} material={nodes.Cube001_1.material}>
        <meshStandardMaterial color={`#${isDarkTheme(theme) ? 'FFF3FF' : 'FFF3DD'}`} />
      </mesh>
      {children}
    </motion.group>
  );
};
