'use client';

import { motion } from 'framer-motion-3d';

import { colors } from '@/styles';
import { dataStore } from '@/utils';

export const Cube = ({ nodes, children, ...props }) => {
  const { accent } = dataStore((store) => ({ theme: store.accent }));

  return (
    <motion.group name='Cube' position={[0, 2.44, 0]} scale={0.25} {...props}>
      <mesh name='Cube_1' geometry={nodes.Cube_1.geometry} material={nodes.Cube_1.material}>
        <meshBasicMaterial color={colors[accent ? accent : 'purple']['accent1']} />
      </mesh>
      <mesh name='Cube_2' geometry={nodes.Cube_2.geometry} material={nodes.Cube_2.material}>
        <meshBasicMaterial color={colors[accent ? accent : 'purple']['accent2']} />
      </mesh>
      {children}
    </motion.group>
  );
};

