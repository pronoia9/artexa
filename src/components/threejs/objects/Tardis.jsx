import { Float } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

import { rngInRange, sceneMotion } from '@/utils';
import { useEffect, useState } from 'react';

export const Tardis = ({ nodes, materials, ...props }) => {
  const [rotate, setRotate] = useState([-0.87, null]);

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
        {...sceneMotion.bakedMesh(0, 0, rotate[1] ? {
          hidden: { scale: 1, rotateY: -0.87 }, 
          visible: { scale: 1, rotateY: rotate[1], transition: { type: 'ease', duration: '2' } }
        } : {})}
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
