'use client';

import { MeshBasicMaterial } from 'three';
import { extend } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';

import { BakedMaterial } from '@/components/threejs';
import { rngInRange, sceneMotion } from '@/utils';

extend({ MeshBasicMaterial });

export const BakedMesh = ({ showCube, variants, children, ...props }) => {
  return (
    <motion.mesh {...sceneMotion.bakedMesh(rngInRange(0.1, 0.25), rngInRange(0.1, 0.25), variants)} {...props}>
      <BakedMaterial />
      {children}
    </motion.mesh>
  );
};
