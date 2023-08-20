import { Float } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

import { sceneMotion } from '@/utils';

export const Tardis = ({ nodes, materials, ...props }) => {
  return (
    <Float>
      <motion.group
        name='Tardis'
        position={[2.32, 1.84, 4.82]}
        rotation={[-3.13, -0.87, -3.08]}
        scale={2.63}
        {...sceneMotion.bakedMesh(0, 0, { visible: { scale: 2.63 } })}
        {...props}
      >
        <mesh name='Tardis_1' geometry={nodes.Tardis_1.geometry} material={materials.blue_wood} />
        <mesh name='Tardis_2' geometry={nodes.Tardis_2.geometry} material={materials.white_wood} />
        <mesh name='Tardis_3' geometry={nodes.Tardis_3.geometry} material={materials.black_glass} />
        <mesh name='Tardis_4' geometry={nodes.Tardis_4.geometry} material={materials.black_sign_material} />
        <mesh name='Tardis_5' geometry={nodes.Tardis_5.geometry} material={materials.internal_floor_material} />
        <mesh name='Tardis_6' geometry={nodes.Tardis_6.geometry} material={materials.white_glass} />
        <mesh name='Tardis_7' geometry={nodes.Tardis_7.geometry} material={materials.bulb_material} />
        <mesh name='Tardis_8' geometry={nodes.Tardis_8.geometry} material={materials.phone_door_sign_material} />
        <mesh name='Tardis_9' geometry={nodes.Tardis_9.geometry} material={materials.handle_material} />
        <mesh name='Tardis_10' geometry={nodes.Tardis_10.geometry} material={materials.st_john_sign_material} />
        <mesh name='Tardis_11' geometry={nodes.Tardis_11.geometry} material={materials.yale_lock_material} />
      </motion.group>
    </Float>
  );
};
