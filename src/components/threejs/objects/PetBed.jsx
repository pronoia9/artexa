'use client';

import { BakedMesh } from '@/components/threejs';

export const PetBed = ({ nodes, ...props }) => {
  return <BakedMesh name='Pet_Bed' geometry={nodes.Pet_Bed.geometry} material={nodes.Pet_Bed.material} position={[1.12, 0.17, 2.83]} {...props} />;
};
