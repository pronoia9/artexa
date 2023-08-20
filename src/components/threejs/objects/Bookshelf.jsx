'use client';

import { BakedMesh } from '@/components/threejs';

export const Bookshelf = ({ nodes, ...props }) => {
  return (
    <BakedMesh name='Bookshelf' geometry={nodes.Bookshelf.geometry} material={nodes.Bookshelf.material} position={[2.72, 2.14, -2.8]} {...props}>
      <BakedMesh name='Elephants' geometry={nodes.Elephants.geometry} material={nodes.Elephants.material} position={[0.34, 2.01, 0.09]} />
    </BakedMesh>
  );
};
