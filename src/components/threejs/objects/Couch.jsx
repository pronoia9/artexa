'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Noise } from 'noisejs';

import { BakedMesh } from '@/components/threejs';

const noise = new Noise();

export const Couch = ({ nodes, materials, ...props }) => {
  const tentaclesRefs = useRef([]);

  const speed = 1.25;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    tentaclesRefs.current[0].rotation.x = noise.perlin2(time * 0.09 * speed, 9) * 0.125;
    tentaclesRefs.current[0].rotation.z = noise.perlin2(time * 0.1 * speed, 10) * 0.125;
    tentaclesRefs.current[1].rotation.x = noise.perlin2(time * 0.08 * speed, 8) * 0.125;
    tentaclesRefs.current[1].rotation.z = noise.perlin2(time * 0.07 * speed, 7) * 0.125;
    tentaclesRefs.current[2].rotation.x = noise.perlin2(time * 0.04 * speed, 4) * 0.125;
    tentaclesRefs.current[2].rotation.z = noise.perlin2(time * 0.03 * speed, 3) * 0.125;
    tentaclesRefs.current[3].rotation.x = noise.perlin2(time * 0.05 * speed, 5) * 0.125;
    tentaclesRefs.current[3].rotation.z = noise.perlin2(time * 0.06 * speed, 6) * 0.125;
    tentaclesRefs.current[4].rotation.x = noise.perlin2(time * 0.01 * speed, 1) * 0.125;
    tentaclesRefs.current[4].rotation.z = noise.perlin2(time * 0.02 * speed, 2) * 0.125;
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
