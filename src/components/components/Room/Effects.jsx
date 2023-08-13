import { Environment, Sky } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';

export const Effects = () => {
  return (
    <>
      {/* <Sky scale={1000} sunPosition={[2, 0.4, 10]} /> */}
      {/* <fog attach='fog' args={['#ff5020', 5, 18]} /> */}
      <Environment preset='forest' />
      <EffectComposer>
        <Bloom intensity={1.0} luminanceThreshold={0.9} luminanceSmoothing={0.025} mipmapBlur={true} />
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} />
      </EffectComposer>
    </>
  );
};
