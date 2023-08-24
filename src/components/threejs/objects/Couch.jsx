'use client';

import { motion as motion3d } from 'framer-motion-3d';

import { BakedMesh } from '@/components/threejs';
import { sceneMotion } from '@/utils';
import { MeshWobbleMaterial } from '@react-three/drei';

export const Couch = ({ nodes, materials, ...props }) => {
  return (
    <BakedMesh name='Couch' geometry={nodes.Couch.geometry} material={nodes.Couch.material} position={[-1.46, 0.71, -2.19]} {...props}>
      <BakedMesh name='Octopus' geometry={nodes.Octopus.geometry} material={nodes.Octopus.material} position={[-1.85, 0.47, -0.5]}>
        <BakedMesh
          name='Tentacle001'
          geometry={nodes.Tentacle001.geometry}
          material={nodes.Tentacle001.material}
          position={[-0.29, 0.16 + 0.05, 0.03]}
          variants={null}
          wobble={false} // ! Disable for now until the texture weirdness is sorted
        />
        <BakedMesh
          name='Tentacle005'
          geometry={nodes.Tentacle005.geometry}
          material={nodes.Tentacle005.material}
          position={[0.92, 0.06 + 0.02, -0.28]}
          variants={null}
          wobble={false} // ! Disable for now until the texture weirdness is sorted
        />
        <BakedMesh
          name='Tentacle002'
          geometry={nodes.Tentacle002.geometry}
          material={nodes.Tentacle002.material}
          position={[-0.29, 0.15 + 0.05, -0.15]}
          variants={null}
          wobble={false} // ! Disable for now until the texture weirdness is sorted
        />
        <BakedMesh
          name='Tentacle004'
          geometry={nodes.Tentacle004.geometry}
          material={nodes.Tentacle004.material}
          position={[0.02, 0.16 + 0.05, -0.28]}
          variants={null}
          wobble={false} // ! Disable for now until the texture weirdness is sorted
        />
        <BakedMesh
          name='Tentacle003'
          geometry={nodes.Tentacle003.geometry}
          material={nodes.Tentacle003.material}
          position={[-0.16, 0.15 + 0.05, -0.27]}
          variants={null}
          wobble={false} // ! Disable for now until the texture weirdness is sorted
        />
      </BakedMesh>

      <motion3d.group name='Zorua' position={[0.68, -0.08, 0.52]} rotation={[-0.62, -0.4, -0.27]} {...sceneMotion.bakedMesh()}>
        <mesh name='Zorua_1' geometry={nodes.Zorua_1.geometry} material={materials['Zorua #35']} />
        <mesh name='Zorua_2' geometry={nodes.Zorua_2.geometry} material={materials['Zorua #36']} />
        <group name='Zorua_Head' position={[0, 0.19, 0.14]}>
          <mesh name='Zorua_Head_1' geometry={nodes.Zorua_Head_1.geometry} material={materials['Zorua #35']} />
          <mesh name='Zorua_Head_2' geometry={nodes.Zorua_Head_2.geometry} material={materials['Zorua #36']} />
          <mesh name='Zorua_Head_3' geometry={nodes.Zorua_Head_3.geometry} material={materials['Zorua #37']} />
          <mesh name='Zorua_Head_4' geometry={nodes.Zorua_Head_4.geometry} material={materials['Zorua #38']} />
          <mesh name='Zorua_Head_5' geometry={nodes.Zorua_Head_5.geometry} material={materials['Zorua #39']} />
        </group>
        <mesh name='Zorua_Tail' geometry={nodes.Zorua_Tail.geometry} material={materials['Zorua #35']} position={[0, 0.19, -0.08]}>
          <MeshWobbleMaterial color='#5E576D' speed={1} />
        </mesh>
      </motion3d.group>
    </BakedMesh>
  );
};
