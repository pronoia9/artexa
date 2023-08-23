'use client';

import { BakedMesh } from '@/components/threejs';

export const Couch = ({ nodes, materials, ...props }) => {
  return (
    <BakedMesh name='Couch' geometry={nodes.Couch.geometry} material={nodes.Couch.material} position={[-1.46, 0.71, -2.19]} {...props}>
      <BakedMesh name='Octopus' geometry={nodes.Octopus.geometry} material={nodes.Octopus.material} position={[-1.85, 0.47, -0.5]} />
      <group name='Zorua' position={[0.68, -0.08, 0.52]} rotation={[-0.62, -0.4, -0.27]}>
        <mesh name='Zorua_1' geometry={nodes.Zorua_1.geometry} material={materials['Zorua #35']} />
        <mesh name='Zorua_2' geometry={nodes.Zorua_2.geometry} material={materials['Zorua #36']} />
        <group name='Zorua_Head' position={[0, 0.19, 0.14]}>
          <mesh name='Zorua_Head_1' geometry={nodes.Zorua_Head_1.geometry} material={materials['Zorua #35']} />
          <mesh name='Zorua_Head_2' geometry={nodes.Zorua_Head_2.geometry} material={materials['Zorua #36']} />
          <mesh name='Zorua_Head_3' geometry={nodes.Zorua_Head_3.geometry} material={materials['Zorua #37']} />
          <mesh name='Zorua_Head_4' geometry={nodes.Zorua_Head_4.geometry} material={materials['Zorua #38']} />
          <mesh name='Zorua_Head_5' geometry={nodes.Zorua_Head_5.geometry} material={materials['Zorua #39']} />
        </group>
        <mesh name='Zorua_Tail' geometry={nodes.Zorua_Tail.geometry} material={materials['Zorua #35']} position={[0, 0.19, -0.08]} />
      </group>
    </BakedMesh>
  );
};
