'use client';

import { Environment, Stars, Sky, Cloud } from '@react-three/drei';
// import { ShaderPass } from 'postprocessing';

// import { BakedShaderMaterial } from '@/components/threejs';
import { dataStore, isDarkTheme } from '@/utils';

export const Effects = () => {
  const { theme } = dataStore((state) => ({ theme: state.theme }));

  // TODO: Experiment with passes
  // const myShaderPass = new ShaderPass(BakedShaderMaterial, 'tDiffuse');

  return (
    <>
      <group key={`scene_effects-${theme}`}>
        {isDarkTheme(theme) ? (
          <>
            <color attach='background' args={['#1e1e28']} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          </>
        ) : (
          <>
            <Sky sunPosition={[100, 20, 100]} />
            <group position={[-9.1, -4.1, -14.1]}>
              <Cloud opacity={0.5} speed={0.25} width={10} depth={2.5} segments={20} />
            </group>
          </>
        )}
      </group>

      <Environment files='/3d/christmas_photo_studio_04_1k.hdr' />
    </>
  );
};

export const Bloom = () => {
  return <></>;
};
