'use client';

import { useEffect, useRef, useState } from 'react';
import { MeshBasicMaterial, SRGBColorSpace } from 'three';
import { extend } from '@react-three/fiber';
import { MeshWobbleMaterial, useTexture } from '@react-three/drei';
import { useControls, button } from 'leva';
import { motion } from 'framer-motion-3d';

// import { BakedMaterial } from '@/components/threejs';
import { dataStore, isDarkTheme, rngInRange, sceneMotion } from '@/utils';

extend({ MeshBasicMaterial });

export const BakedMesh = ({ showCube, variants, children, wobble = false, wobbleOptions, ...props }) => {
  const meshRef = useRef(),
    materialRef = useRef();
  const { theme, toggleTheme } = dataStore((store) => ({ theme: store.theme, toggleTheme: store.toggleTheme }));
  const dayTexture = useTexture('/3d/bakedDay.jpg'),
    nightTexture = useTexture('/3d/bakedNight.jpg'),
    lightMap = useTexture('/3d/lightMap.jpg');

  dayTexture.flipY = false;
  dayTexture.colorSpace = SRGBColorSpace;
  nightTexture.flipY = false;
  nightTexture.colorSpace = SRGBColorSpace;
  lightMap.flipY = false;

  const updateMaterials = () => void ((materialRef.current.map.needsUpdate = true), (materialRef.current.map.needsPMREUpdate = true));

  // console.log('meshRef', meshRef);
  // console.log('materialRef', materialRef);

  const options = useControls('Texture', {
    'Toggle Time': button(() => {
      toggleTheme();
      updateMaterials();
    }),
    // 'Toggle Light Map': button(() => { }),
    // 'Light Intensity': { value: 50, min: 0, max: 100, step: 0.1 },
  });

  return (
    <motion.mesh ref={meshRef} {...sceneMotion.bakedMesh(rngInRange(0.1, 0.25), rngInRange(0.1, 0.25), variants)} {...props}>
      {!wobble && (
        <meshBasicMaterial
          ref={materialRef}
          key={`${theme}-${options}`}
          map={isDarkTheme(theme) ? nightTexture : dayTexture}
          // lightMap={lightMap}
          // lightMapIntensity={options['Light Intensity']}
        />
      )}
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
