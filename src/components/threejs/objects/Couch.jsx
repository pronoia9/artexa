'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Noise } from 'noisejs';

import { BakedMesh } from '@/components/threejs';

const noise = new Noise();

export const Couch = ({ nodes, materials, ...props }) => {
  const tentaclesRefs = useRef([]);

  const multiplier = 1.1, speed = 0.125;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    tentaclesRefs.current[0].rotation.x = noise.perlin2(time * 0.09 * multiplier, 9) * speed;
    tentaclesRefs.current[0].rotation.z = noise.perlin2(time * 0.1 * multiplier, 10) * speed;
    tentaclesRefs.current[1].rotation.x = noise.perlin2(time * 0.08 * multiplier, 8) * speed;
    tentaclesRefs.current[1].rotation.z = noise.perlin2(time * 0.07 * multiplier, 7) * speed;
    tentaclesRefs.current[2].rotation.x = noise.perlin2(time * 0.04 * multiplier, 4) * speed;
    tentaclesRefs.current[2].rotation.z = noise.perlin2(time * 0.03 * multiplier, 3) * speed;
    tentaclesRefs.current[3].rotation.x = noise.perlin2(time * 0.05 * multiplier, 5) * speed;
    tentaclesRefs.current[3].rotation.z = noise.perlin2(time * 0.06 * multiplier, 6) * speed;
    tentaclesRefs.current[4].rotation.x = noise.perlin2(time * 0.01 * multiplier, 1) * speed;
    tentaclesRefs.current[4].rotation.z = noise.perlin2(time * 0.02 * multiplier, 2) * speed;
  });

  return (
    <BakedMesh name='Couch' geometry={nodes.Couch.geometry} material={nodes.Couch.material} position={[-1.46, 0.71, -2.19]} {...props}>
      <BakedMesh name='Octopus' geometry={nodes.Octopus.geometry} material={nodes.Octopus.material} position={[-1.85, 0.47, -0.5]}>
        <BakedMesh
          ref={(ref) => void (tentaclesRefs.current[0] = ref)}
          name='Tentacle001'
          geometry={nodes.Tentacle001.geometry}
          material={nodes.Tentacle001.material}
          position={[-0.29, 0.16 + 0.05, 0.03]}
          variants={null}
        />
        <BakedMesh
          ref={(ref) => void (tentaclesRefs.current[4] = ref)}
          name='Tentacle005'
          geometry={nodes.Tentacle005.geometry}
          material={nodes.Tentacle005.material}
          position={[0.92, 0.06 + 0.02, -0.28]}
          variants={null}
        />
        <BakedMesh
          ref={(ref) => void (tentaclesRefs.current[1] = ref)}
          name='Tentacle002'
          geometry={nodes.Tentacle002.geometry}
          material={nodes.Tentacle002.material}
          position={[-0.29, 0.15 + 0.05, -0.15]}
          variants={null}
        />
        <BakedMesh
          ref={(ref) => void (tentaclesRefs.current[3] = ref)}
          name='Tentacle004'
          geometry={nodes.Tentacle004.geometry}
          material={nodes.Tentacle004.material}
          position={[0.02, 0.16 + 0.05, -0.28]}
          variants={null}
        />
        <BakedMesh
          ref={(ref) => void (tentaclesRefs.current[2] = ref)}
          name='Tentacle003'
          geometry={nodes.Tentacle003.geometry}
          material={nodes.Tentacle003.material}
          position={[-0.16, 0.15 + 0.05, -0.27]}
          variants={null}
        />
      </BakedMesh>
    </BakedMesh>
  );
};
