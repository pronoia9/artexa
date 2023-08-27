'use client';

import { useEffect, useState } from 'react';

import { BakedMesh, SteamMaterial } from '@/components/threejs';

export const Desk = ({ nodes, children, ...props }) => {
  const [cameraRotate, setCameraRotate] = useState([0, null]);

  useEffect(() => {
    let timeout;
    const wander = () => {
      setCameraRotate((prev) => [prev[1] || 0, Math.random()]);
      timeout = setTimeout(wander, (1 + Math.random() * 5) * 1000);
    };
    wander();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <BakedMesh name='Desk' geometry={nodes.Desk.geometry} material={nodes.Desk.material} position={[2.55, 1.21, 0.45]} {...props}>
      <BakedMesh
        key={`camera-rotation-${cameraRotate[1] || cameraRotate[0]}`}
        name='Camera'
        geometry={nodes.Camera.geometry}
        material={nodes.Camera.material}
        position={[0.39, 1.52, 1.54]}
        rotation={[0, 0, 0]}
        {...(cameraRotate[1]
          ? {
              variants: {
                hidden: { scale: 1, rotateY: cameraRotate[0] },
                visible: { scale: 1, rotateY: cameraRotate[1],
                  transition: { type: 'ease', duration: 0.5 || Math.abs(cameraRotate[1] - cameraRotate[0]) },
                },
              },
            }
          : {})}
      />

      <BakedMesh name='Coffee_Mug' geometry={nodes.Coffee_Mug.geometry} material={nodes.Coffee_Mug.material} position={[-0.45, 0.3, -1.45]}>
        <mesh
          name='Coffee_Steam'
          geometry={nodes.Coffee_Steam.geometry}
          material={nodes.Coffee_Steam.material}
          position={[0, 0.42, -0.01]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <SteamMaterial />
        </mesh>
      </BakedMesh>

      <mesh
        name='Elgato_Light'
        geometry={nodes.Elgato_Light.geometry}
        material={nodes.Elgato_Light.material}
        position={[0.37, 2.12, -0.49]}
        rotation={[1.67, 0.25, 1.2]}
      >
        <meshStandardMaterial color='white' emissive='white' emissiveIntensity={10} />
      </mesh>

      <BakedMesh name='Headset' geometry={nodes.Headset.geometry} material={nodes.Headset.material} position={[-0.21, 0.27, -1.91]} />

      <BakedMesh name='Macbook' geometry={nodes.Macbook.geometry} material={nodes.Macbook.material} position={[-0.01, 0.61, 1.11]}>
        <mesh
          name='Screen_(Macbook)'
          geometry={nodes['Screen_(Macbook)'].geometry}
          material={nodes['Screen_(Macbook)'].material}
          position={[0.22, 0.382, 0.07]}
          rotation={[1.59, -0.06, 1.87]}
        />
      </BakedMesh>

      <BakedMesh name='Monitor' geometry={nodes.Monitor.geometry} material={nodes.Monitor.material} position={[0.43, 0.95, -0.29]}>
        <mesh
          name='Screen_(Monitor)'
          geometry={nodes['Screen_(Monitor)'].geometry}
          material={nodes['Screen_(Monitor)'].material}
          position={[-0.09, 0.325, 0.066]}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </BakedMesh>

      <BakedMesh
        name='Plant_(Desk,_L)'
        geometry={nodes['Plant_(Desk,_L)'].geometry}
        material={nodes['Plant_(Desk,_L)'].material}
        position={[0.17, 1.08, 2.32]}
      />

      <BakedMesh
        name='Plant_(Desk,_S)'
        geometry={nodes['Plant_(Desk,_S)'].geometry}
        material={nodes['Plant_(Desk,_S)'].material}
        position={[-0.27, 0.5, 1.77]}
      />

      <BakedMesh name='RubixCube' geometry={nodes.RubixCube.geometry} material={nodes.RubixCube.material} position={[0.42, 0.27, -1.87]} />
    </BakedMesh>
  );
};
