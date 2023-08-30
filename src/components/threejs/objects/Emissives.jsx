'use client';

import { useEffect, useRef, useState } from "react";
import { useVideoTexture } from "@react-three/drei";

import { dataStore, isDarkTheme } from "@/utils";

export const Emissives = ({ nodes, materials }) => {
  return (
    <group name='Emissives'>
      <mesh
        name='Elgato_Light'
        geometry={nodes.Elgato_Light.geometry}
        material={nodes.Elgato_Light.material}
        position={[-2.93, 3.63, 0.05]}
        rotation={[1.48, -0.25, -1.94]}
      />
      <mesh
        name='Screen_(Macbook)'
        geometry={nodes['Screen_(Macbook)'].geometry}
        material={materials.Screen}
        position={[-2.76, 2.505, -1.615]}
        rotation={[1.56, 0.05, -1.27]}
        scale={1.01}
      />
      <mesh
        name='Screen_(Monitor)'
        geometry={nodes['Screen_(Monitor)'].geometry}
        material={materials.Screen}
        position={[-2.9, 2.78, -0.21]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={[1.03, 1.01, 1.01]}
      />
      <mesh
        name='Screen_(TV)'
        geometry={nodes['Screen_(TV)'].geometry}
        material={materials.Screen}
        position={[1.7, 2.24, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.01}
      />
    </group>
  );
};

const TardisLights = (props) => <meshStandardMaterial color='white' emissive='#FDFF00' {...props} />;

const Tardis = () => {
  const { theme } = dataStore((state) => ({ theme: state.theme }));
  return (
    <>
      {/* // TODO: Test if key is needed */}
      <mesh key={`Tardis_3-${theme}`} name='Tardis_3' geometry={nodes.Tardis_3.geometry} material={materials['TARDIS black_glass']}>
        {isDarkTheme(theme) && <TardisLights emissiveIntensity={1} />}
      </mesh>
      <mesh key={`Tardis_6-${theme}`} name='Tardis_6' geometry={nodes.Tardis_6.geometry} material={materials['TARDIS white_glass']}>
        {isDarkTheme(theme) && <TardisLights emissiveIntensity={2} />}
      </mesh>
      <mesh key={`Tardis_7-${theme}`} name='Tardis_7' geometry={nodes.Tardis_7.geometry} material={materials['TARDIS bulb_material']}>
        {isDarkTheme(theme) && <TardisLights emissiveIntensity={10} />}
      </mesh>
    </>
  );
};

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

const MacbookScreen = ({ nodes }) => {
  const videoMaterialRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false),
    [videoElement, setVideoElement] = useState(null);
  const videoTexture = useVideoTexture('/3d/house-of-the-dragon.mp4', {
    unsuspend: 'canplay',
    crossOrigin: 'Anonymous',
    muted: false,
    loop: false,
    start: isPlaying,
  });

  const handleVideoEnd = () => {
    setIsPlaying(false); // Set isPlaying to false when the video ends
    videoElement && (videoElement.currentTime = 0); // Rewind the video to the beginning
  };

  useEffect(() => {
    if (videoMaterialRef.current && videoMaterialRef.current.map) {
      const videoElement = videoMaterialRef.current.map.image;
      setVideoElement(videoElement);

      videoElement.addEventListener('ended', handleVideoEnd); // Add an event listener for the "ended" event
      return () => void videoElement.removeEventListener('ended', handleVideoEnd); // Clean up the event listener when component unmounts
    }
  }, []);

  useEffect(() => {
    if (videoElement) {
      if (isPlaying) videoElement.play();
      else videoElement.pause();
    }
  }, [isPlaying, videoElement]);

  return (
    <mesh
      name='Screen_(Macbook)'
      geometry={nodes['Screen_(Macbook)'].geometry}
      material={nodes['Screen_(Macbook)'].material}
      position={[0.22, 0.382, 0.07]}
      rotation={[1.59, -0.06, 1.87]}
    >
      <meshStandardMaterial
        ref={videoMaterialRef}
        // ! Enable to turn off the screen while the video is paused
        // key={`macbook-screen-material-${isPlaying}`}
        // color={isPlaying ? null : 'black'}
        map={videoTexture}
        toneMapped={false}
        // TODO: After readding Bloom
        // emissive={'white'} // Set the emissive color
        // emissiveIntensity={0.01} // Adjust the intensity of the emissive light
      />
    </mesh>
  );
};
