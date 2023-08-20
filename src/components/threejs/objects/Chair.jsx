'use client';

import { BakedMesh } from '@/components/threejs';

export const Chair = ({ nodes, ...props }) => {
  return (
    <BakedMesh name='Chair' geometry={nodes.Chair.geometry} material={nodes.Chair.material} position={[0.73, 0.26, 0.59]} {...props}>
      <BakedMesh
        name='Chair_Seat'
        geometry={nodes.Chair_Seat.geometry}
        material={nodes.Chair_Seat.material}
        position={[0, 1.21, 0.14]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
    </BakedMesh>
  );
};
