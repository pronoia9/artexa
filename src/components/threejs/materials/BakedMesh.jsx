'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion-3d';

import { BakedMaterial } from '@/components/threejs';
import { colors } from '@/styles';
import { dataStore, rngInRange, sceneMotion } from '@/utils';

export const BakedMesh = forwardRef(function MyInput({ showCube, variants, children, hovered, ...props }, ref) {
  const { accent } = dataStore((state) => ({ accent: state.accent }));

  return (
    <motion.mesh ref={ref} {...sceneMotion.bakedMesh(rngInRange(0.1, 0.25), rngInRange(0.1, 0.25), variants)} {...props}>
      {!hovered ? <BakedMaterial /> : <meshStandardMaterial color={colors[accent][`accent${Math.floor(rngInRange(0, 6))}`]} />}
      {children}
    </motion.mesh>
  );
});
