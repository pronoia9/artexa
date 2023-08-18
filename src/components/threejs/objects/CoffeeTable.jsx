import { BakedMaterial } from '@/components/threejs';

export const CoffeeTable = ({ nodes, ...props }) => {
  return (
    <BakedMaterial name='Coffee_Table' geometry={nodes.Coffee_Table.geometry} material={nodes.Coffee_Table.material} position={[0, 3.15, 4.87]} {...props}>
      <BakedMaterial name='Controller' geometry={nodes.Controller.geometry} material={nodes.Controller.material} />
      <BakedMaterial name='Google_Home' geometry={nodes.Google_Home.geometry} material={nodes.Google_Home.material}>
        <mesh
          name='Google_Home_Leds001'
          geometry={nodes.Google_Home_Leds001.geometry}
          material={nodes.Google_Home_Leds001.material}
          position={[-1.57, -2.03, -3.84]}
          rotation={[0, 0, 0.12]}
          scale={0.02}
        />
        <mesh
          name='Google_Home_Leds002'
          geometry={nodes.Google_Home_Leds002.geometry}
          material={nodes.Google_Home_Leds002.material}
          position={[-1.45, -2.03, -3.84]}
          rotation={[-Math.PI, 0, -3.02]}
          scale={0.02}
        />
        <mesh
          name='Google_Home_Leds003'
          geometry={nodes.Google_Home_Leds003.geometry}
          material={nodes.Google_Home_Leds003.material}
          position={[-1.49, -2.03, -3.84]}
          rotation={[-Math.PI, 0, -3.1]}
          scale={0.02}
        />
        <mesh
          name='Google_Home_Leds004'
          geometry={nodes.Google_Home_Leds004.geometry}
          material={nodes.Google_Home_Leds004.material}
          position={[-1.53, -2.03, -3.84]}
          rotation={[0, 0, 0.04]}
          scale={0.02}
        />
      </BakedMaterial>
    </BakedMaterial>
  );
};
