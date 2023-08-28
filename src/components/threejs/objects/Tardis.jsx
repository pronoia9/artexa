'use client';

import { useEffect, useState } from 'react';
import { Float } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

import { dataStore, isDarkTheme, rngInRange, sceneMotion } from '@/utils';

const Lights = (props) => <meshStandardMaterial color='white' emissive='#FDFF00' {...props} />;

export const Tardis = ({ nodes, materials, ...props }) => {
  const [rotate, setRotate] = useState([-0.87, null]);
  const { theme } = dataStore((state) => ({ theme: state.theme }));

  useEffect(() => {
    let timeout;
    const turn = () => {
      setRotate((prev) => [prev[1] || -0.87, parseFloat(prev) + rngInRange(-Math.PI, Math.PI) + Math.random()]);
      timeout = setTimeout(turn, (5 + Math.random() * 5) * 1000);
    };
    turn();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Float
      peed={1} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[-0.2, 0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <motion.group
        key={`tardis-group-rotation-${rotate[1] || rotate[0]}`}
        name='Tardis'
        position={[2.32, 1.84, 4.82]}
        rotation={[-3.13, -0.87, -3.08]}
        {...sceneMotion.bakedMesh(
          0,
          0,
          rotate[1]
            ? {
                hidden: { scale: 1, rotateY: -0.87 },
                visible: { scale: 1, rotateY: rotate[1], transition: { type: 'ease', duration: '2' } },
              }
            : {}
        )}
        {...props}
      >
        <mesh name='Tardis_1' geometry={nodes.Tardis_1.geometry} material={materials['TARDIS blue_wood']} />
        <mesh name='Tardis_2' geometry={nodes.Tardis_2.geometry} material={materials['TARDIS white_wood']} />
        {/* // TODO: Test if key is needed */}
        <mesh key={`Tardis_3-${theme}`} name='Tardis_3' geometry={nodes.Tardis_3.geometry} material={materials['TARDIS black_glass']}>
          {isDarkTheme(theme) && <Lights emissiveIntensity={1} />}
        </mesh>
        <mesh name='Tardis_4' geometry={nodes.Tardis_4.geometry} material={materials['TARDIS black_sign_material']} />
        <mesh name='Tardis_5' geometry={nodes.Tardis_5.geometry} material={materials['TARDIS internal_floor_material']} />
        <mesh key={`Tardis_6-${theme}`} name='Tardis_6' geometry={nodes.Tardis_6.geometry} material={materials['TARDIS white_glass']}>
          {isDarkTheme(theme) && <Lights emissiveIntensity={2} />}
        </mesh>
        <mesh key={`Tardis_7-${theme}`} name='Tardis_7' geometry={nodes.Tardis_7.geometry} material={materials['TARDIS bulb_material']}>
          {isDarkTheme(theme) && <Lights emissiveIntensity={10} />}
        </mesh>
        <mesh name='Tardis_8' geometry={nodes.Tardis_8.geometry} material={materials['TARDIS phone_door_sign_material']} />
        <mesh name='Tardis_9' geometry={nodes.Tardis_9.geometry} material={materials['TARDIS handle_material']} />
        <mesh name='Tardis_10' geometry={nodes.Tardis_10.geometry} material={materials['TARDIS st_john_sign_material']} />
        <mesh name='Tardis_11' geometry={nodes.Tardis_11.geometry} material={materials['TARDIS yale_lock_material']} />
      </motion.group>
    </Float>
  );
};
