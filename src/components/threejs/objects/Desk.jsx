'use client';

import { BakedMesh } from '@/components/threejs';

export const Desk = ({ nodes, children, ...props }) => {
  return (
    <BakedMesh name='Desk' geometry={nodes.Desk.geometry} material={nodes.Desk.material} position={[2.55, 1.21, 0.45]} {...props}>
      <BakedMesh name='Camera' geometry={nodes.Camera.geometry} material={nodes.Camera.material} position={[0.35, 1.65, 1.49]} />

      <BakedMesh name='Coffee_Mug' geometry={nodes.Coffee_Mug.geometry} material={nodes.Coffee_Mug.material} position={[-0.45, 0.3, -1.45]}>
        <mesh
          name='Coffee_Steam'
          geometry={nodes.Coffee_Steam.geometry}
          material={nodes.Coffee_Steam.material}
          position={[0, 0.42, -0.01]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
      </BakedMesh>

      <mesh
        name='Elgato_Light'
        geometry={nodes.Elgato_Light.geometry}
        material={nodes.Elgato_Light.material}
        position={[0.37, 2.12, -0.49]}
        rotation={[1.67, 0.25, 1.2]}
      >
        <meshBasicMaterial color='white' />
      </mesh>

      <BakedMesh name='Headset' geometry={nodes.Headset.geometry} material={nodes.Headset.material} position={[-0.21, 0.27, -1.91]} />

      <BakedMesh name='Macbook' geometry={nodes.Macbook.geometry} material={nodes.Macbook.material} position={[-0.01, 0.61, 1.11]}>
        <mesh
          name='Screen_(Macbook)'
          geometry={nodes['Screen_(Macbook)'].geometry}
          material={nodes['Screen_(Macbook)'].material}
          position={[0.22, 0.38, 0.06]}
          rotation={[1.59, -0.05, 1.87]}
        />
      </BakedMesh>

      <BakedMesh name='Monitor' geometry={nodes.Monitor.geometry} material={nodes.Monitor.material} position={[0.43, 0.95, -0.29]}>
        <mesh
          name='Screen_(Monitor)'
          geometry={nodes['Screen_(Monitor)'].geometry}
          material={nodes['Screen_(Monitor)'].material}
          position={[-0.09, 0.32, 0.06]}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </BakedMesh>

      <BakedMesh
        name='Plant_(Desk,_L)'
        geometry={nodes['Plant_(Desk,_L)'].geometry}
        material={nodes['Plant_(Desk,_L)'].material}
        position={[0.17, 1.08, 2.32]}
      />

      <BakedMesh
        name='Plant_(Desk,_S)'
        geometry={nodes['Plant_(Desk,_S)'].geometry}
        material={nodes['Plant_(Desk,_S)'].material}
        position={[-0.27, 0.5, 1.77]}
      />

      <BakedMesh name='RubixCube' geometry={nodes.RubixCube.geometry} material={nodes.RubixCube.material} position={[0.42, 0.27, -1.87]} />
    </BakedMesh>
  );
};
