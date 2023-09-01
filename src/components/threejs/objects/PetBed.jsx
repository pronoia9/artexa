'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Noise } from 'noisejs';
import { motion as motion3d } from 'framer-motion-3d';

import { BakedMesh } from '@/components/threejs';
import { sceneMotion } from '@/utils';

const noise = new Noise();

export const PetBed = ({ nodes, materials, ...props }) => {
  const zoruaHeadRef = useRef(), zoruaTailRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime(); // Get the elapsed time since animation started

    // Generate Perlin noise values for rotation variations
    const tailXRotationNoise = noise.perlin2(time * 0.7, 1);
    const tailYRotationNoise = noise.perlin2(time * 0.6, 0);
    const tailZRotationNoise = noise.perlin2(time * 0.8, 2);
    const headXRotationNoise = noise.perlin2(time * 0.4, 3);
    const headYRotationNoise = noise.perlin2(time * 0.5, 4);
    const headZRotationNoise = noise.perlin2(time * 0.6, 5);

    // Generate Perlin noise value for speed variation
    const tailXRotationSpeed = 0.05 + tailYRotationNoise * 0.1; // Adjust speed variation range

    // Calculate rotation values based on noise and range limitations
    const tailXRotation = tailXRotationNoise * 0.5; // Scaled to be between 0 and 1
    const tailYRotation = Math.sin(time * tailXRotationSpeed) * (Math.PI / 2);
    const tailZRotation = tailZRotationNoise * 0.25; // Scaled to be between -0.5 and 0.5
    const headXRotation = (headXRotationNoise - 0.5) * 0.3; // Scaled to be between 0 and 0.5
    const headYRotation = (headYRotationNoise - 0.5) * 0.1; // Scaled to be between -0.5 and 0.5
    const headZRotation = (headZRotationNoise - 0.5) * 0.2; // Scaled to be between -0.5 and 0.5

    // Apply rotations to the tail mesh
    zoruaTailRef.current.rotation.x = tailXRotation;
    zoruaTailRef.current.rotation.y = tailYRotation;
    zoruaTailRef.current.rotation.z = tailZRotation;
    zoruaHeadRef.current.rotation.x = -headXRotation;
    zoruaHeadRef.current.rotation.y = headYRotation;
    zoruaHeadRef.current.rotation.z = headZRotation;
  });

  return (
    <BakedMesh name='Pet_Bed' geometry={nodes.Pet_Bed.geometry} material={nodes.Pet_Bed.material} position={[1.12, 0.17, 2.83]} {...props}>
      <motion3d.group name='Zorua' position={[-0.09, 0.03, -0.05]} rotation={[-2.46, 0.72, 2.65]} {...sceneMotion.bakedMesh()}>
        <mesh name='Zorua_1' geometry={nodes.Zorua_1.geometry} material={materials['Zorua #35']} />
        <mesh name='Zorua_2' geometry={nodes.Zorua_2.geometry} material={materials['Zorua #36']} />
        <group ref={zoruaHeadRef} name='Zorua_Head' position={[0, 0.19, 0.14]}>
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
        />
      </motion3d.group>
    </BakedMesh>
  );
};
