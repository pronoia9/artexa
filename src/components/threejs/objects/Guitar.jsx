'use client';

import { BakedMesh } from '@/components/threejs';

export const Guitar = ({ nodes, ...props }) => {
  return <BakedMesh name='Guitar' geometry={nodes.Guitar.geometry} material={nodes.Guitar.material} position={[2.24, 1.26, -2.14]} {...props} />;
};
