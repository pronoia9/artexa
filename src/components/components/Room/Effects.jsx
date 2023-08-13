import { Environment } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';

export const Effects = () => {
  return (
    <>
      <Environment preset='forest' />
      <EffectComposer>
        <Bloom intensity={1.0} luminanceThreshold={0.9} luminanceSmoothing={0.025} mipmapBlur={true} />
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} />
      </EffectComposer>
    </>
  );
};
