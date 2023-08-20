'use client';

import { BakedMesh } from '@/components/threejs';

export const Couch = ({ nodes, ...props }) => {
  return (
    <BakedMesh name='Couch' geometry={nodes.Couch.geometry} material={nodes.Couch.material} position={[-1.46, 0.71, -2.19]} {...props}>
      <BakedMesh name='Octopus' geometry={nodes.Octopus.geometry} material={nodes.Octopus.material} position={[-1.85, 0.47, -0.5]} />
    </BakedMesh>
  );
};
