'use client';

import { useRef } from 'react';
import { MeshBasicMaterial } from 'three';
import { extend } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

import { BakedMaterial } from '@/components/threejs';
import { dataStore, isDarkTheme, rngInRange, sceneMotion } from '@/utils';

extend({ MeshBasicMaterial });

export const BakedMesh = ({ showCube, variants, children, wobble = false, wobbleOptions, ...props }) => {
  const { theme } = dataStore((store) => ({ theme: store.theme }));
  const meshRef = useRef(), materialRef = useRef();

  return (
    <motion.mesh ref={meshRef} {...sceneMotion.bakedMesh(rngInRange(0.1, 0.25), rngInRange(0.1, 0.25), variants)} {...props}>
      {!wobble && <BakedMaterial />}
      {wobble && (
        <MeshWobbleMaterial
          ref={materialRef}
          key={`${theme}-${options}`}
          map={isDarkTheme(theme) ? nightTexture : dayTexture}
          emissive={0}
          {...wobbleOptions}
        />
      )}
      {children}
    </motion.mesh>
  );
};
