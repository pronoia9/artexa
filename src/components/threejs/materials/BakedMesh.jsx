'use client';

import { useEffect, useState } from 'react';
import { MeshBasicMaterial } from 'three';
import { extend } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

import { BakedMaterial } from '@/components/threejs';
import { dataStore, isDarkTheme, rngInRange, sceneMotion } from '@/utils';

extend({ MeshBasicMaterial });

export const BakedMesh = ({ showCube, variants, children, ...props }) => {
  const { theme } = dataStore((store) => ({ theme: store.theme }));
  const bakedTextureDay = useTexture('/3d/bakedDay.jpg'),
    bakedTextureNight = useTexture('/3d/bakedNight.jpg');
  const [bakedTexture, setBakedTexture] = useState(bakedTextureNight);

  useEffect(() => void setBakedTexture(isDarkTheme(theme) ? bakedTextureNight : bakedTextureDay), [theme]);

  return (
    <motion.mesh {...sceneMotion.bakedMesh(rngInRange(0.1, 0.25), rngInRange(0.1, 0.25), variants)} {...props}>
      {<meshBasicMaterial key={bakedTexture} map={bakedTexture} map-flipY={false} />}
      {/* <BakedMaterial /> */}
      {children}
    </motion.mesh>
  );
};
