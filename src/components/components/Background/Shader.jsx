import { useRef } from 'react';
import { Color } from 'three';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

import { dataStore } from '../../../store/dataStore';
import { colors } from '../../../styles';
import vertexShader from './vertexShader.glsl';
import fragmentShader from './fragmentShader.glsl';

export const Shader = () => (
  <Canvas>
    <color args={['#31AFD4']} attach='background' />
    <Plane>
      <ShaderMaterial />
    </Plane>
  </Canvas>
); 

export const Plane = ({ children }) => {
  const { viewport } = useThree();
  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      {children}
    </mesh>
  );
}

export const ShaderMaterial = () => {
  const accent = dataStore((state) => state.accent);
  const ref = useRef();

  extend({
    NoisyColorV1ShaderMaterial: shaderMaterial(
      {
        uResolution: [window.innerWidth, window.innerHeight],
        uTime: 0,
        uLowGpu: false,
        uVeryLowGpu: false,
        uSpeedColor: 20.0,
        uColor1: new Color(colors[accent].accent1),
        uColor2: new Color(colors[accent].accent2),
        uColor3: new Color(colors[accent].accent3),
        uColor4: new Color(colors[accent].accent4),
        uColor5: new Color(colors[accent].accent5),
      },
      vertexShader,
      fragmentShader
    ),
  });

  useFrame((state, delta) => {
    ref.current.uTime += delta * 10;
  });
  return <noisyColorV1ShaderMaterial ref={ref} />;
}
