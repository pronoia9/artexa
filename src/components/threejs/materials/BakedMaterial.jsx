'use client';

import { useEffect, useRef } from 'react';
import { Color } from 'three';
import { extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

extend({
  BakedShaderMaterial: shaderMaterial(
    {
      uBakedDayTexture: '/public/3d/bakedDay.jpg',
      uBakedNightTexture: '/public/3d/bakedNight.jpg',
      uBakedNeutralTexture: '/public/3d/bakedNeutral.jpg',
      uLightMapTexture: '/public/3d/lightMap.jpg',

      uNightMix: 1,
      uNeutralMix: 0,

      uLightTvColor: new Color('#ff115e'),
      uLightTvStrength: 1.47,

      uLightDeskColor: new Color('#ff6700'),
      uLightDeskStrength: 1.9,

      uLightPcColor: new Color('#0082ff'),
      uLightPcStrength: 1.4,
    },
    `
    varying vec2 vUv;

    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;
      gl_Position = projectionPosition;

      vUv = uv;
    }
    `,
    `
    uniform sampler2D uBakedDayTexture;
    uniform sampler2D uBakedNightTexture;
    uniform sampler2D uBakedNeutralTexture;
    uniform sampler2D uLightMapTexture;

    uniform float uNightMix;
    uniform float uNeutralMix;

    uniform vec3 uLightTvColor;
    uniform float uLightTvStrength;

    uniform vec3 uLightDeskColor;
    uniform float uLightDeskStrength;

    uniform vec3 uLightPcColor;
    uniform float uLightPcStrength;

    varying vec2 vUv;

    // #pragma glslify: blend = require(glsl-blend/add)
    #pragma glslify: blend = require(glsl-blend/lighten)
    // #pragma glslify: blend = require(glsl-blend/normal)
    // #pragma glslify: blend = require(glsl-blend/screen)

    void main() {
      vec3 bakedDayColor = texture2D(uBakedDayTexture, vUv).rgb;
      vec3 bakedNightColor = texture2D(uBakedNightTexture, vUv).rgb;
      vec3 bakedNeutralColor = texture2D(uBakedNeutralTexture, vUv).rgb;
      vec3 bakedColor = mix(mix(bakedDayColor, bakedNightColor, uNightMix), bakedNeutralColor, uNeutralMix);
      vec3 lightMapColor = texture2D(uLightMapTexture, vUv).rgb;

      float lightTvStrength = lightMapColor.r * uLightTvStrength;
      bakedColor = blend(bakedColor, uLightTvColor, lightTvStrength);

      float lightPcStrength = lightMapColor.b * uLightPcStrength;
      bakedColor = blend(bakedColor, uLightPcColor, lightPcStrength);

      float lightDeskStrength = lightMapColor.g * uLightDeskStrength;
      bakedColor = blend(bakedColor, uLightDeskColor, lightDeskStrength);

      gl_FragColor = vec4(bakedColor, 1.0);
    }
    `
  ),
});

export function BakedMaterial() {
  const ref = useRef();

  useEffect(() => {
    // ref?.current && (ref.current.transparent = true);
    // ref?.current && (ref.current.depthWrite = false);
  }, []);

  useFrame((state, delta) => {
    // ref.current.uTime += delta * 500;
  });

  return <bakedShaderMaterial ref={ref} />;
}
