'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

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

      <GoogleHome nodes={nodes} />
    </BakedMesh>
  );
};

const GoogleHome = ({ nodes }) => {
  const [hovered, setHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const ledRefs = useRef([]);
  const ledMask = useTexture('/3d/googleHomeLedMask.png');
  const ledColors = ['#196aff', '#ff0000', '#ff5d00', '#7db81b'];

  useFrame((state) => {
    if (isPlaying && ledRefs.current)
      ledRefs.current.forEach((item, index) => {
        item.opacity = Math.sin(state.clock.elapsedTime * 2 - index * 0.5) * 0.5 + 0.5;
      });
  });

  return (
    <BakedMesh
      name='Google_Home'
      geometry={nodes.Google_Home.geometry}
      material={nodes.Google_Home.material}
      position={[0.51, 0.21, 0.47]}
      onPointerOver={() => void setHovered(true)}
      onPointerOut={() => void setHovered(false)}
      onClick={() => void setIsPlaying((prev) => !prev)}
      hovered={hovered}
    >
      {isPlaying && (
        <>
          <mesh
            name='Google_Home_Leds001'
            geometry={nodes.Google_Home_Leds001.geometry}
            material={nodes.Google_Home_Leds001.material}
            position={[-0.04, 0.04, 0]}
            rotation={[0, 0, 0.12]}
          >
            <meshBasicMaterial ref={(ref) => (ledRefs.current[0] = ref)} color={ledColors[0]} transparent alphaMap={ledMask} />
          </mesh>
          <mesh
            name='Google_Home_Leds002'
            geometry={nodes.Google_Home_Leds002.geometry}
            material={nodes.Google_Home_Leds002.material}
            position={[0.04, 0.04, 0]}
            rotation={[-Math.PI, 0, -3.02]}
          >
            <meshBasicMaterial ref={(ref) => (ledRefs.current[1] = ref)} color={ledColors[1]} transparent alphaMap={ledMask} />
          </mesh>
          <mesh
            name='Google_Home_Leds003'
            geometry={nodes.Google_Home_Leds003.geometry}
            material={nodes.Google_Home_Leds003.material}
            position={[0.01, 0.04, 0]}
            rotation={[-Math.PI, 0, -3.1]}
          >
            <meshBasicMaterial ref={(ref) => (ledRefs.current[2] = ref)} color={ledColors[2]} transparent alphaMap={ledMask} />
          </mesh>
          <mesh
            name='Google_Home_Leds004'
            geometry={nodes.Google_Home_Leds004.geometry}
            material={nodes.Google_Home_Leds004.material}
            position={[-0.01, 0.04, 0]}
            rotation={[0, 0, 0.04]}
          >
            <meshBasicMaterial ref={(ref) => (ledRefs.current[3] = ref)} color={ledColors[3]} transparent alphaMap={ledMask} />
          </mesh>
        </>
      )}
    </BakedMesh>
  );
};
