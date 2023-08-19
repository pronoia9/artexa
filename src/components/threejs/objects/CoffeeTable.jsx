'use client';

import { BakedMesh } from '@/components/threejs';

export const CoffeeTable = ({ nodes, ...props }) => {
  return (
    <BakedMesh
      name='Coffee_Table'
      geometry={nodes.Coffee_Table.geometry}
      material={nodes.Coffee_Table.material}
      position={[-2.21, 0.76, 0.37]}
      {...props}
    >
      <BakedMesh name='Controller' geometry={nodes.Controller.geometry} material={nodes.Controller.material} position={[-0.23, 0.3, -0.54]} />

      <BakedMesh name='Google_Home' geometry={nodes.Google_Home.geometry} material={nodes.Google_Home.material} position={[0.71, 0.3, 0.65]}>
        <mesh
          name='Google_Home_Leds001'
          geometry={nodes.Google_Home_Leds001.geometry}
          material={nodes.Google_Home_Leds001.material}
          position={[-0.06, 0.05, 0]}
          rotation={[0, 0, 0.12]}
          scale={0.02}
        />
        <mesh
          name='Google_Home_Leds002'
          geometry={nodes.Google_Home_Leds002.geometry}
          material={nodes.Google_Home_Leds002.material}
          position={[0.06, 0.05, 0]}
          rotation={[-Math.PI, 0, -3.02]}
          scale={0.02}
        />
        <mesh
          name='Google_Home_Leds003'
          geometry={nodes.Google_Home_Leds003.geometry}
          material={nodes.Google_Home_Leds003.material}
          position={[0.02, 0.06, 0]}
          rotation={[-Math.PI, 0, -3.1]}
          scale={0.02}
        />
        <mesh
          name='Google_Home_Leds004'
          geometry={nodes.Google_Home_Leds004.geometry}
          material={nodes.Google_Home_Leds004.material}
          position={[-0.02, 0.06, 0]}
          rotation={[0, 0, 0.04]}
          scale={0.02}
        />
      </BakedMesh>
    </BakedMesh>
  );
};
