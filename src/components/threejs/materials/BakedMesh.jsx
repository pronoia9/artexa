'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion-3d';

import { BakedMaterial } from '@/components/threejs';
import { rngInRange, sceneMotion } from '@/utils';

export const BakedMesh = forwardRef(function MyInput({ showCube, variants, children, ...props }, ref) {
  return (
    <motion.mesh ref={ref} {...sceneMotion.bakedMesh(rngInRange(0.1, 0.25), rngInRange(0.1, 0.25), variants)} {...props}>
      <BakedMaterial />
      {children}
    </motion.mesh>
  );
});