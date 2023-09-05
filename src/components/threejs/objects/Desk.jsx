'use client';

import { useEffect, useState } from 'react';

import { BakedMesh, SteamMaterial } from '@/components/threejs';

export const Desk = ({ nodes, ...props }) => {
  return (
    <BakedMesh name='Desk' geometry={nodes.Desk.geometry} material={nodes.Desk.material} position={[2.55, 1.21, 0.45]} {...props}>
      <Camera nodes={nodes} />
      <CoffeeMug nodes={nodes} />
      <ElgatoLight nodes={nodes} />
      <Headset nodes={nodes} />
      <Macbook nodes={nodes} />
      <Monitor nodes={nodes} />
      <PlantL nodes={nodes} />
      <PlantS nodes={nodes} />
      <RubixCube nodes={nodes} />
    </BakedMesh>
  );
};

const Camera = ({ nodes }) => {
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
              visible: {
                scale: 1,
                rotateY: cameraRotate[1],
                transition: { type: 'ease', duration: 0.5 || Math.abs(cameraRotate[1] - cameraRotate[0]) },
              },
            },
          }
        : {})}
    />
  );
};

const CoffeeMug = ({ nodes }) => (
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
);

const ElgatoLight = ({ nodes }) => (
  <mesh
    name='Elgato_Light'
    geometry={nodes.Elgato_Light.geometry}
    material={nodes.Elgato_Light.material}
    position={[0.37, 2.12, -0.49]}
    rotation={[1.67, 0.25, 1.2]}
  >
    <meshStandardMaterial color='white' emissive='white' emissiveIntensity={10} />
  </mesh>
);

const Headset = ({ nodes }) => (
  <BakedMesh name='Headset' geometry={nodes.Headset.geometry} material={nodes.Headset.material} position={[-0.21, 0.27, -1.91]} />
);

// TODO: Idea 1 - Selective Bloom Spheres
// TODO: Idea 2 - Selective Confetti
const Macbook = ({ nodes, ...props }) => {
  return (
    <BakedMesh name='Macbook' geometry={nodes.Macbook.geometry} material={nodes.Macbook.material} position={[-0.01, 0.61, 1.11]} {...props}>
      <mesh
        name='Screen_(Macbook)'
        geometry={nodes['Screen_(Macbook)'].geometry}
        material={nodes['Screen_(Macbook)'].material}
        position={[0.22, 0.38, 0.06]}
        rotation={[1.59, -0.05, 1.87]}
        scale={1.01}
      />
    </BakedMesh>
  );
};

// TODO: Idea 1 - Blobs Portal
const Monitor = ({ nodes, ...props }) => (
  <BakedMesh name='Monitor' geometry={nodes.Monitor.geometry} material={nodes.Monitor.material} position={[0.43, 0.95, -0.29]} {...props}>
    <mesh
      name='Screen_(Monitor)'
      geometry={nodes['Screen_(Monitor)'].geometry}
      material={nodes['Screen_(Monitor)'].material}
      position={[-0.09, 0.32, 0.06]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={[1.03, 1.01, 1.01]}
    />
  </BakedMesh>
);

const PlantL = ({ nodes }) => (
  <BakedMesh
    name='Plant_(Desk,_L)'
    geometry={nodes['Plant_(Desk,_L)'].geometry}
    material={nodes['Plant_(Desk,_L)'].material}
    position={[0.17, 1.08, 2.32]}
  />
);

const PlantS = ({ nodes }) => (
  <BakedMesh
    name='Plant_(Desk,_S)'
    geometry={nodes['Plant_(Desk,_S)'].geometry}
    material={nodes['Plant_(Desk,_S)'].material}
    position={[-0.27, 0.5, 1.77]}
  />
);

const RubixCube = ({ nodes }) => (
  <BakedMesh name='RubixCube' geometry={nodes.RubixCube.geometry} material={nodes.RubixCube.material} position={[0.42, 0.27, -1.87]} />
);
