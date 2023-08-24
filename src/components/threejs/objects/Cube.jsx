'use client';

import { motion } from 'framer-motion-3d';

import { dataStore, isDarkTheme } from '@/utils';

export const Cube = ({ nodes, materials, children, ...props }) => {
  const { theme } = dataStore((store) => ({ theme: store.theme }));

  return (
    <motion.group name='Cube' position={[0, 2.44, 0]} scale={0.25} {...props}>
      <mesh name='Cube001' geometry={nodes.Cube001.geometry} material={materials[`Cube ${isDarkTheme(theme) ? 'Night' : 'Day'}.002`]} />
      <mesh name='Cube001_1' geometry={nodes.Cube001_1.geometry} material={materials[`Cube ${isDarkTheme(theme) ? 'Night' : 'Day'}.001`]} />
      {children}
    </motion.group>
  );
};
