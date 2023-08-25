'use client';

import { useEffect, useRef } from 'react';
import { Color, SRGBColorSpace, TextureLoader } from 'three';
import { extend } from '@react-three/fiber';
import { shaderMaterial, useTexture } from '@react-three/drei';
import { useControls } from 'leva';
import { dataStore, isDarkTheme } from '@/utils';

const BakedShaderMaterial = shaderMaterial(
  {
    uBakedLightTexture: null,
    uBakedDarkTexture: null,
    uBakedNeutralTexture: null,
    uLightMapTexture: null,

    uLightMix: 1,
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
    uniform sampler2D uBakedLightTexture;
    uniform sampler2D uBakedDarkTexture;
    uniform sampler2D uBakedNeutralTexture;
    uniform sampler2D uLightMapTexture;

    uniform float uLightMix;
    uniform float uNeutralMix;

    uniform vec3 uLightTvColor;
    uniform float uLightTvStrength;

    uniform vec3 uLightDeskColor;
    uniform float uLightDeskStrength;

    uniform vec3 uLightPcColor;
    uniform float uLightPcStrength;

    varying vec2 vUv;

    // #pragma glslify: blend = require(glsl-blend/add)
    // #pragma glslify: blend = require(glsl-blend/normal)
    // #pragma glslify: blend = require(glsl-blend/screen)

    // #pragma glslify: blend = require(glsl-blend/lighten)
    float blendLighten(float base, float blend) {
      return max(blend, base);
    }

    vec3 blendLighten(vec3 base, vec3 blend) {
      return vec3(blendLighten(base.r, blend.r), blendLighten(base.g, blend.g), blendLighten(base.b, blend.b));
    }

    vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
      return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
    }

    void main() {
      vec3 bakedDayColor = texture2D(uBakedLightTexture, vUv).rgb;
      vec3 bakedNightColor = texture2D(uBakedDarkTexture, vUv).rgb;
      vec3 bakedNeutralColor = texture2D(uBakedNeutralTexture, vUv).rgb;
      vec3 bakedColor = mix(mix(bakedDayColor, bakedNightColor, uLightMix), bakedNeutralColor, uNeutralMix);
      vec3 lightMapColor = texture2D(uLightMapTexture, vUv).rgb;

      float lightTvStrength = lightMapColor.r * uLightTvStrength;
      bakedColor = blendLighten(bakedColor, uLightTvColor, lightTvStrength);

      float lightPcStrength = lightMapColor.b * uLightPcStrength;
      bakedColor = blendLighten(bakedColor, uLightPcColor, lightPcStrength);

      float lightDeskStrength = lightMapColor.g * uLightDeskStrength;
      bakedColor = blendLighten(bakedColor, uLightDeskColor, lightDeskStrength);

      gl_FragColor = vec4(bakedColor, 1.0);
    }
    `
);

export function BakedMaterial(props) {
  const ref = useRef();
  const { theme } = dataStore((state) => ({ theme: state.theme }));

  const lightTexture = useTexture('/3d/bakedDay.jpg'),
    darkTexture = useTexture('/3d/bakedNight.jpg'),
    neutralTexture = useTexture('/3d/bakedNeutral.jpg'),
    lightMap = useTexture('/3d/lightMap.jpg');

  lightTexture.flipY = false;
  lightTexture.colorSpace = SRGBColorSpace;
  darkTexture.flipY = false;
  darkTexture.colorSpace = SRGBColorSpace;
  neutralTexture.flipY = false;
  neutralTexture.colorSpace = SRGBColorSpace;
  lightMap.flipY = false;

  useEffect(() => {
    ref.current.uBakedLightTexture = lightTexture;
    ref.current.uBakedDarkTexture = darkTexture;
    ref.current.uBakedNeutralTexture = neutralTexture;
    ref.current.uLightMapTexture = lightMap;
    ref.current.needsUpdate = true;
  }, []);

  const controls = useControls('Room Shader', {
    'Light Mix': { value: isDarkTheme(theme) ? 1 : 0, step: 0.01, min: 0, max: 1 },
    'Neutral Mix': { value: 0, step: 0.01, min: 0, max: 1 },
    'TV Light': { value: '#ff115e' },
    'TV Light Strength': { value: 1.47, step: 0.01, min: 0, max: 3 },
    'Desk Light': { value: '#ff6700' },
    'Desk Light Strength': { value: 1.9, step: 0.01, min: 0, max: 3 },
    'PC Light': { value: '#0082ff' },
    'PC Light Strength': { value: 1.4, step: 0.01, min: 0, max: 3 },
  });

  useEffect(() => {
    ref.current.uBakedLightTexture = lightTexture;
    ref.current.uBakedDarkTexture = darkTexture;
    ref.current.uBakedNeutralTexture = neutralTexture;
    ref.current.uLightMapTexture = lightMap;
    ref.current.uLightMix = controls['Light Mix'];
    ref.current.uNeutralMix = controls['Neutral Mix'];
    ref.current.uLightTvColor = new Color(controls['TV Light']);
    ref.current.uLightTvStrength = controls['TV Light Strength'];
    ref.current.uLightDeskColor = new Color(controls['Desk Light']);
    ref.current.uLightDeskStrength = controls['Desk Light Strength'];
    ref.current.uLightPcColor = new Color(controls['PC Light']);
    ref.current.uLightPcStrength = controls['PC Light Strength'];
    ref.current.needsUpdate = true;
  }, [controls]);

  return (
    <bakedShaderMaterial
      // key={Object.values(controls).join()}
      ref={ref}
      {...controls}
      {...props}
    />
  );
}

extend({ TextureLoader, shaderMaterial, BakedShaderMaterial });
