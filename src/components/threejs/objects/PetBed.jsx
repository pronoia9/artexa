'use client';

import { motion as motion3d } from 'framer-motion-3d';

import { BakedMesh } from '@/components/threejs';
import { sceneMotion } from '@/utils';

export const PetBed = ({ nodes, materials, ...props }) => {
  return (
    <BakedMesh name='Pet_Bed' geometry={nodes.Pet_Bed.geometry} material={nodes.Pet_Bed.material} position={[1.12, 0.17, 2.83]} {...props}>
      <motion3d.mesh
        name='Lilipup'
        geometry={nodes.Lilipup.geometry}
        material={materials['Lillipup Body00']}
        position={[0.1, 0.06, 0.03]}
        rotation={[-2.83, 0.49, 2.99]}
        {...sceneMotion.bakedMesh()}
      >
        <group name='Lilipup_Head' position={[0, 0.06, 0.15]}>
          <mesh name='Lilipup_Head_1' geometry={nodes.Lilipup_Head_1.geometry} material={materials['Lillipup Body00']} />
          <mesh name='Lilipup_Head_2' geometry={nodes.Lilipup_Head_2.geometry} material={materials['Lillipup REye']} />
          <mesh name='Lilipup_Head_3' geometry={nodes.Lilipup_Head_3.geometry} material={materials['Lillipup Mouth']} />
        </group>
        <mesh name='Lilipup_Tail' geometry={nodes.Lilipup_Tail.geometry} material={materials['Lillipup Body00']} position={[0, 0.08, -0.02]} />
      </motion3d.mesh>
    </BakedMesh>
  );
};
