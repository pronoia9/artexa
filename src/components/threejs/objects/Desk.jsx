import { BakedMaterial } from '@/components/threejs';
import { motion } from 'framer-motion-3d';

export const Desk = ({ nodes, children, ...props }) => {
  return (
    <BakedMaterial name='Desk' geometry={nodes.Desk.geometry} material={nodes.Desk.material} position={[0, 3.15, 4.87]} {...props}>
      <BakedMaterial name='Camera' geometry={nodes.Camera.geometry} material={nodes.Camera.material} />
      <BakedMaterial name='Coffee_Mug' geometry={nodes.Coffee_Mug.geometry} material={nodes.Coffee_Mug.material} />
      <mesh
        name='Coffee_Steam'
        geometry={nodes.Coffee_Steam.geometry}
        material={nodes.Coffee_Steam.material}
        position={[2.89, -0.49, -6.26]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name='Elgato_Light'
        geometry={nodes.Elgato_Light.geometry}
        material={nodes.Elgato_Light.material}
        position={[4.03, 1.44, -4.93]}
        rotation={[1.67, 0.25, 1.2]}
        scale={1.1}
      />
      <BakedMaterial name='Headset' geometry={nodes.Headset.geometry} material={nodes.Headset.material} />
      <BakedMaterial name='Macbook' geometry={nodes.Macbook.geometry} material={nodes.Macbook.material}>
        <mesh
          name='Screen_(Macbook)'
          geometry={nodes['Screen_(Macbook)'].geometry}
          material={nodes['Screen_(Macbook)'].material}
          position={[3.77, -0.53, -2.64]}
          rotation={[1.59, -0.05, 1.87]}
        />
      </BakedMaterial>
      <BakedMaterial name='Monitor' geometry={nodes.Monitor.geometry} material={nodes.Monitor.material}>
        <mesh
          name='Screen_(Monitor)'
          geometry={nodes['Screen_(Monitor)'].geometry}
          material={nodes['Screen_(Monitor)'].material}
          position={[4.06, 0.21, -4.56]}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </BakedMaterial>
      <BakedMaterial name='Plant_(Desk,_L)' geometry={nodes['Plant_(Desk,_L)'].geometry} material={nodes['Plant_(Desk,_L)'].material} />
      <BakedMaterial name='Plant_(Desk,_S)' geometry={nodes['Plant_(Desk,_S)'].geometry} material={nodes['Plant_(Desk,_S)'].material} />
      <BakedMaterial name='RubixCube' geometry={nodes.RubixCube.geometry} material={nodes.RubixCube.material} />
    </BakedMaterial>
  );
};
