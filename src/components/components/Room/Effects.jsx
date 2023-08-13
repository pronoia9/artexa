import { Environment, Sky, Stars, Cloud } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';

export const Effects = () => {
  return (
    <>
      <color attach='background' args={['#191923']} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}
      {/* <Sky sunPosition={[100, 20, 100]} /> */}
      {/* <Cloud opacity={0.5} speed={0.8} width={10} depth={2.5} segments={20} /> */}

      <Environment preset='apartment' />

      {/* <EffectComposer>
        <Bloom intensity={1.0} luminanceThreshold={0.9} luminanceSmoothing={0.025} mipmapBlur={true} />
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} />
      </EffectComposer> */}
    </>
  );
};
