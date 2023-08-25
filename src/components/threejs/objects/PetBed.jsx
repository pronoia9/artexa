'use client';

import { MeshWobbleMaterial } from '@react-three/drei';
import { motion as motion3d } from 'framer-motion-3d';

import { BakedMesh } from '@/components/threejs';
import { sceneMotion } from '@/utils';

export const PetBed = ({ nodes, materials, ...props }) => {
  return (
    <BakedMesh name='Pet_Bed' geometry={nodes.Pet_Bed.geometry} material={nodes.Pet_Bed.material} position={[1.12, 0.17, 2.83]} {...props}>
      <motion3d.group name='Zorua' position={[-0.09, 0.03, -0.05]} rotation={[-2.46, 0.72, 2.65]} {...sceneMotion.bakedMesh()}>
        <mesh name='Zorua_1' geometry={nodes.Zorua_1.geometry} material={materials['Zorua #35']} />
        <mesh name='Zorua_2' geometry={nodes.Zorua_2.geometry} material={materials['Zorua #36']} />
        <group name='Zorua_Head' position={[0, 0.19, 0.14]}>
          <mesh name='Zorua_Head_1' geometry={nodes.Zorua_Head_1.geometry} material={materials['Zorua #35']} />
          <mesh name='Zorua_Head_2' geometry={nodes.Zorua_Head_2.geometry} material={materials['Zorua #36']} />
          <mesh name='Zorua_Head_3' geometry={nodes.Zorua_Head_3.geometry} material={materials['Zorua #37']} />
          <mesh name='Zorua_Head_4' geometry={nodes.Zorua_Head_4.geometry} material={materials['Zorua #38']} />
          <mesh name='Zorua_Head_5' geometry={nodes.Zorua_Head_5.geometry} material={materials['Zorua #39']} />
        </group>
        <mesh name='Zorua_Tail' geometry={nodes.Zorua_Tail.geometry} material={materials['Zorua #35']} position={[0, 0.19, -0.08]}>
          <MeshWobbleMaterial color='#5E576D' speed={7.5} />
        </mesh>
      </motion3d.group>
    </BakedMesh>
  );
};
