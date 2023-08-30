'use client';

import { BakedMesh } from '@/components/threejs';

export const TVUnit = ({ nodes, ...props }) => {
  return (
    <BakedMesh name='TV_Unit' geometry={nodes.TV_Unit.geometry} material={nodes.TV_Unit.material} position={[-1.68, 0.47, 2.91]} {...props}>
      <BakedMesh name='Console' geometry={nodes.Console.geometry} material={nodes.Console.material} position={[1.41, -0.05, 0.02]} />

      <BakedMesh
        name='Nintendo_Switch'
        geometry={nodes.Nintendo_Switch.geometry}
        material={nodes.Nintendo_Switch.material}
        position={[1.63, 0.34, 0.06]}
      />

      <BakedMesh
        name='Plant_(TV_Unit)'
        geometry={nodes['Plant_(TV_Unit)'].geometry}
        material={nodes['Plant_(TV_Unit)'].material}
        position={[-1.62, 0.6, -0.01]}
      />

      <BakedMesh name='PS5' geometry={nodes.PS5.geometry} material={nodes.PS5.material} position={[-1.56, -0.04, 0.05]} />

      <BakedMesh name='TV' geometry={nodes.TV.geometry} material={nodes.TV.material} position={[-0.02, 0.92, 0.13]} />

      <BakedMesh name='VR' geometry={nodes.VR.geometry} material={nodes.VR.material} position={[-1.17, -0.33, -0.17]} />
    </BakedMesh>
  );
};
