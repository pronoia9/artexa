'use client';

import { MeshBasicMaterial } from 'three';
import { extend } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

import { dataStore, isDarkTheme, rngInRange, sceneMotion } from '@/utils';
import { useState } from 'react';

extend({ MeshBasicMaterial });

export const BakedMesh = ({ showCube, variants, children, ...props }) => {
  const { theme } = dataStore((store) => ({ theme: store.theme }));
  const bakedTextureDay = useTexture('/3d/bakedDay.jpg'),
    bakedTextureNight = useTexture('/3d/bakedNeutral.jpg'),
    bakedTextureNeutral = useTexture('/3d/bakedNight.jpg');
  const [bakedTexture, setBakedTexture] = useState(bakedTextureNeutral);

  return (
    <motion.mesh castShadow receiveShadow {...sceneMotion.bakedMesh(rngInRange(0.1, 0.25), rngInRange(0.1, 0.25), variants)} {...props}>
      <motion.meshBasicMaterial map={bakedTexture} map-flipY={false} />
      {children}
    </motion.mesh>
  );
};
