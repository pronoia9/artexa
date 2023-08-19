'use client';

import { MeshBasicMaterial, MeshNormalMaterial, MeshStandardMaterial } from 'three';
import { extend } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

import { bakedDay, bakedNeutral, bakedNight } from '@/components/threejs';
import { dataStore, isDarkTheme, rngInRange } from '@/utils';
import { useState } from 'react';

extend({ MeshBasicMaterial, MeshNormalMaterial, MeshStandardMaterial });

export const BakedMesh = ({ variants, children, ...props }) => {
  const { theme } = dataStore((store) => ({ theme: store.theme }));
  const bakedTextureDay = useTexture(bakedDay),
    bakedTextureNight = useTexture(bakedNight),
    bakedTextureNeutral = useTexture(bakedNeutral);
  const [bakedTexture, setBakedTexture] = useState(bakedTextureNeutral);

  return (
    <motion.mesh
      castShadow
      receiveShadow
      variants={{
        hidden: { scale: 0, ...variants?.hidden },
        visible: {
          scale: 1,
          ...variants?.visible,
          transition: {
            type: 'spring',
            bounce: 0.6,
            delayChildren: rngInRange(0.1, 0.25),
            staggerChildren: rngInRange(0.1, 0.25),
            ...variants?.visible?.transition,
          },
        },
      }}
      {...props}
    >
      {/* <motion.meshBasicMaterial map={bakedTexture} map-flipY={false} /> */}
      <meshBasicMaterial />
      {children}
    </motion.mesh>
  );
};
