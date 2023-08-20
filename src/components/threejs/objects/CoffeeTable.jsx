'use client';

import { BakedMesh } from '@/components/threejs';

export const CoffeeTable = ({ nodes, ...props }) => {
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
    </BakedMesh>
  );
};
