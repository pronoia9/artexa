'use client';

import { BakedMesh } from '@/components/threejs';

export const Couch = ({ nodes, materials, ...props }) => {
  return (
    <BakedMesh name='Couch' geometry={nodes.Couch.geometry} material={nodes.Couch.material} position={[-1.46, 0.71, -2.19]} {...props}>
      <BakedMesh name='Octopus' geometry={nodes.Octopus.geometry} material={nodes.Octopus.material} position={[-1.85, 0.47, -0.5]}>
        <BakedMesh
          name='Tentacle001'
          geometry={nodes.Tentacle001.geometry}
          material={nodes.Tentacle001.material}
          position={[-0.29, 0.16 + 0.05, 0.03]}
          variants={null}
        />
        <BakedMesh
          name='Tentacle005'
          geometry={nodes.Tentacle005.geometry}
          material={nodes.Tentacle005.material}
          position={[0.92, 0.06 + 0.02, -0.28]}
          variants={null}
        />
        <BakedMesh
          name='Tentacle002'
          geometry={nodes.Tentacle002.geometry}
          material={nodes.Tentacle002.material}
          position={[-0.29, 0.15 + 0.05, -0.15]}
          variants={null}
        />
        <BakedMesh
          name='Tentacle004'
          geometry={nodes.Tentacle004.geometry}
          material={nodes.Tentacle004.material}
          position={[0.02, 0.16 + 0.05, -0.28]}
          variants={null}
        />
        <BakedMesh
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
