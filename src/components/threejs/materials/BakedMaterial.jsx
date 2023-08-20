'use client';

import { useEffect, useRef } from 'react';
import { Color, sRGBEncoding } from 'three';
import { extend, useFrame } from '@react-three/fiber';
import { shaderMaterial, useTexture } from '@react-three/drei';

extend({
  BakedShaderMaterial: shaderMaterial(
    {
      uBakedDayTexture: null,
      uBakedNightTexture: null,
      uBakedNeutralTexture: null,
      uLightMapTexture: null,

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
      vec3 bakedDayColor = texture2D(uBakedDayTexture, vUv).rgb;
      vec3 bakedNightColor = texture2D(uBakedNightTexture, vUv).rgb;
      vec3 bakedNeutralColor = texture2D(uBakedNeutralTexture, vUv).rgb;
      vec3 bakedColor = mix(mix(bakedDayColor, bakedNightColor, uNightMix), bakedNeutralColor, uNeutralMix);
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
  ),
});

export function BakedMaterial() {
  const ref = useRef();
  const bakedTextureDay = useTexture('/3d/bakedDay.jpg'),
    bakedTextureNight = useTexture('/3d/bakedNeutral.jpg'),
    bakedTextureNeutral = useTexture('/3d/bakedNight.jpg'),
    lightMap = useTexture('/3d/lightMap.jpg');

  // bakedTextureDay.encoding = sRGBEncoding;
  bakedTextureDay.flipY = false;
  // bakedTextureNight.encoding = sRGBEncoding;
  bakedTextureNight.flipY = false;
  // bakedTextureNeutral.encoding = sRGBEncoding;
  bakedTextureNeutral.flipY = false;
  lightMap.flipY = false;

  useEffect(() => {
    ref?.current && (ref.current.uBakedDayTexture = bakedTextureDay);
    ref?.current && (ref.current.uBakedNightTexture = bakedTextureNight);
    ref?.current && (ref.current.uBakedNeutralTexture = bakedTextureNeutral);
    ref?.current && (ref.current.uLightMapTexture = lightMap);
  }, []);

  useFrame((state, delta) => {
    // ref.current.uTime += delta * 500;
  });

  return <bakedShaderMaterial ref={ref} />;
}
