'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
// import { useControls } from 'leva';
import { motion as motion3d } from 'framer-motion-3d';
import { Noise } from 'noisejs';

import { BakedMesh } from '@/components/threejs';
import { sceneMotion } from '@/utils';

const noise = new Noise();

export const PetBed = ({ nodes, materials, ...props }) => {
  const zoruaTailRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime(); // Get the elapsed time since animation started

    // Generate Perlin noise values for rotation variations
    const xRotationNoise = noise.perlin2(time * 0.7, 1);
    const yRotationNoise = noise.perlin2(time * 0.6, 0);
    const zRotationNoise = noise.perlin2(time * 0.8, 2);
    
    // Generate Perlin noise value for speed variation
    const xRotationSpeed = 0.05 + yRotationNoise * 0.1; // Adjust speed variation range

    // Calculate rotation values based on noise and range limitations
    const xRotation = xRotationNoise * 0.5; // Scaled to be between 0 and 1
    const yRotation = Math.sin(time * xRotationSpeed) * (Math.PI / 2);
    const zRotation = zRotationNoise * 0.25; // Scaled to be between -0.5 and 0.5

    // Apply rotations to the tail mesh
    zoruaTailRef.current.rotation.x = xRotation;
    zoruaTailRef.current.rotation.y = yRotation;
    zoruaTailRef.current.rotation.z = zRotation;
  });

  return (
    <BakedMesh name='Pet_Bed' geometry={nodes.Pet_Bed.geometry} material={nodes.Pet_Bed.material} position={[1.12, 0.17, 2.83]} {...props}>
      <motion3d.group name='Zorua' position={[-0.09, 0.03, -0.05]} rotation={[-2.46, 0.72, 2.65]} {...sceneMotion.bakedMesh()}>
        <mesh name='Zorua_1' geometry={nodes.Zorua_1.geometry} material={materials['Zorua #35']} />
        <mesh name='Zorua_2' geometry={nodes.Zorua_2.geometry} material={materials['Zorua #36']} />
        <group name='Zorua_Head' position={[0, 0.19, 0.14]}>
          <mesh name='Zorua_Head_1' geometry={nodes.Zorua_Head_1.geometry} material={materials['Zorua #35']} />
          <mesh name='Zorua_Head_2' geometry={nodes.Zorua_Head_2.geometry} material={materials['Zorua #36']} />
          <mesh name='Zorua_Head_3' geometry={nodes.Zorua_Head_3.geometry} material={materials['Zorua #37']} />
          <mesh name='Zorua_Head_4' geometry={nodes.Zorua_Head_4.geometry} material={materials['Zorua #38']} />
          <mesh name='Zorua_Head_5' geometry={nodes.Zorua_Head_5.geometry} material={materials['Zorua #39']} />
        </group>
        <mesh
          ref={zoruaTailRef}
          name='Zorua_Tail'
          geometry={nodes.Zorua_Tail.geometry}
          material={materials['Zorua #35']}
          position={[0, 0.19, -0.08]}
          // {...useControls({ rotation: { value: [0, 0, 0], step: 0.1 } })}
        />
      </motion3d.group>
    </BakedMesh>
  );
};
