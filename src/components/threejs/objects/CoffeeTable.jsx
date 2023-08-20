'use client';

import { motion } from 'framer-motion-3d';

import { BakedMesh } from '@/components/threejs';
import { rngInRange, sceneMotion } from '@/utils';

export const CoffeeTable = ({ nodes, materials, ...props }) => {
  return (
    <BakedMesh
      name='Coffee_Table'
      geometry={nodes.Coffee_Table.geometry}
      material={nodes.Coffee_Table.material}
      position={[-1.61, 0.55, 0.27]}
      {...props}
    >
      <BakedMesh name='Controller' geometry={nodes.Controller.geometry} material={nodes.Controller.material} position={[-0.17, 0.22, -0.39]} />

      <BakedMesh name='Google_Home' geometry={nodes.Google_Home.geometry} material={nodes.Google_Home.material} position={[0.51, 0.21, 0.47]}>
        <mesh
          name='Google_Home_Leds001'
          geometry={nodes.Google_Home_Leds001.geometry}
          material={nodes.Google_Home_Leds001.material}
          position={[-0.04, 0.04, 0]}
          rotation={[0, 0, 0.12]}
        />
        <mesh
          name='Google_Home_Leds002'
          geometry={nodes.Google_Home_Leds002.geometry}
          material={nodes.Google_Home_Leds002.material}
          position={[0.04, 0.04, 0]}
          rotation={[-Math.PI, 0, -3.02]}
        />
        <mesh
          name='Google_Home_Leds003'
          geometry={nodes.Google_Home_Leds003.geometry}
          material={nodes.Google_Home_Leds003.material}
          position={[0.01, 0.04, 0]}
          rotation={[-Math.PI, 0, -3.1]}
        />
        <mesh
          name='Google_Home_Leds004'
          geometry={nodes.Google_Home_Leds004.geometry}
          material={nodes.Google_Home_Leds004.material}
          position={[-0.01, 0.04, 0]}
          rotation={[0, 0, 0.04]}
        />
      </BakedMesh>

      <motion.group name='Tardis' position={[-0.57, 0.16, 0.18]} rotation={[Math.PI, -1.3, Math.PI]} {...sceneMotion.bakedMesh()}>
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
    </BakedMesh>
  );
};
