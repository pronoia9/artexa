'use client';

import { BakedMesh } from '@/components/threejs';

export const Desk = ({ nodes, children, ...props }) => {
  return (
    <BakedMesh name='Desk' geometry={nodes.Desk.geometry} material={nodes.Desk.material} position={[3.51, 1.66, 0.61]} {...props}>
      <BakedMesh name='Camera' geometry={nodes.Camera.geometry} material={nodes.Camera.material} position={[0.48, 2.27, 2.06]} />

      <BakedMesh name='Coffee_Mug' geometry={nodes.Coffee_Mug.geometry} material={nodes.Coffee_Mug.material} position={[-0.62, 0.41, -2]}>
        <mesh
          name='Coffee_Steam'
          geometry={nodes.Coffee_Steam.geometry}
          material={nodes.Coffee_Steam.material}
          position={[0, 0.58, -0.01]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
      </BakedMesh>

      <mesh
        name='Elgato_Light'
        geometry={nodes.Elgato_Light.geometry}
        material={nodes.Elgato_Light.material}
        position={[0.52, 2.92, -0.68]}
        rotation={[1.67, 0.25, 1.2]}
        scale={1.1}
      />

      <BakedMesh name='Headset' geometry={nodes.Headset.geometry} material={nodes.Headset.material} position={[-0.3, 0.37, -2.64]} />

      <BakedMesh name='Macbook' geometry={nodes.Macbook.geometry} material={nodes.Macbook.material} position={[-0.02, 0.85, 1.53]}>
        <mesh
          name='Screen_(Macbook)'
          geometry={nodes['Screen_(Macbook)'].geometry}
          material={nodes['Screen_(Macbook)'].material}
          position={[0.3, 0.53, 0.09]}
          rotation={[1.59, -0.05, 1.87]}
        />
      </BakedMesh>

      <BakedMesh name='Monitor' geometry={nodes.Monitor.geometry} material={nodes.Monitor.material} position={[0.6, 1.3, -0.4]}>
        <mesh
          name='Screen_(Monitor)'
          geometry={nodes['Screen_(Monitor)'].geometry}
          material={nodes['Screen_(Monitor)'].material}
          position={[-0.13, 0.45, 0.09]}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </BakedMesh>

      <BakedMesh
        name='Plant_(Desk,_L)'
        geometry={nodes['Plant_(Desk,_L)'].geometry}
        material={nodes['Plant_(Desk,_L)'].material}
        position={[0.23, 1.49, 3.2]}
      />

      <BakedMesh
        name='Plant_(Desk,_S)'
        geometry={nodes['Plant_(Desk,_S)'].geometry}
        material={nodes['Plant_(Desk,_S)'].material}
        position={[-0.37, 0.68, 2.44]}
      />

      <BakedMesh name='RubixCube' geometry={nodes.RubixCube.geometry} material={nodes.RubixCube.material} position={[0.58, 0.37, -2.57]} />
    </BakedMesh>
  );
};
