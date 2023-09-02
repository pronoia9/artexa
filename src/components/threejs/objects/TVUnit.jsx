'use client';

import { useEffect, useRef, useState } from 'react';
import { useVideoTexture } from '@react-three/drei';

import { BakedMesh } from '@/components/threejs';

export const TVUnit = ({ nodes, ...props }) => {
  const videoMaterialRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false),
    [videoElement, setVideoElement] = useState(null),
    [videoSource, setVideoSource] = useState('tv');

  const videoTexture = useVideoTexture(`/3d/${videoSource}.mp4`, {
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

  const handleVideoSourceChange = () => {};

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
    <BakedMesh name='TV_Unit' geometry={nodes.TV_Unit.geometry} material={nodes.TV_Unit.material} position={[-1.68, 0.47, 2.91]} {...props}>
      <BakedMesh name='Console' geometry={nodes.Console.geometry} material={nodes.Console.material} position={[1.41, -0.05, 0.02]} />

      <BakedMesh
        name='Nintendo_Switch'
        geometry={nodes.Nintendo_Switch.geometry}
        material={nodes.Nintendo_Switch.material}
        position={[1.63, 0.34, 0.06]}
        onClick={() => void (setVideoSource('switch'), setIsPlaying((prev) => !prev))}
      />

      <BakedMesh
        name='Plant_(TV_Unit)'
        geometry={nodes['Plant_(TV_Unit)'].geometry}
        material={nodes['Plant_(TV_Unit)'].material}
        position={[-1.62, 0.6, -0.01]}
      />

      <BakedMesh name='PS5' geometry={nodes.PS5.geometry} material={nodes.PS5.material} position={[-1.56, -0.04, 0.05]} />

      <BakedMesh
        name='TV'
        geometry={nodes.TV.geometry}
        material={nodes.TV.material}
        position={[-0.02, 0.92, 0.13]}
        onClick={() => void (setVideoSource('tv'), setIsPlaying((prev) => !prev))}
        onDoubleClick={handleVideoEnd}
      >
        <mesh
          name='Screen_(TV)'
          geometry={nodes['Screen_(TV)'].geometry}
          material={nodes['Screen_(TV)'].material}
          position={[0, 0.55, 0.02]}
          scale={1.01}
        >
          <meshStandardMaterial
            ref={videoMaterialRef}
            // ! Enable to turn off the screen while the video is paused
            // key={`tv-screen-material-${isPlaying}`}
            // color={isPlaying ? null : 'black'}
            map={videoTexture}
            toneMapped={false}
            // TODO: After readding Bloom
            // emissive={'white'} // Set the emissive color
            // emissiveIntensity={0.01} // Adjust the intensity of the emissive light
          />
        </mesh>
      </BakedMesh>

      <BakedMesh name='VR' geometry={nodes.VR.geometry} material={nodes.VR.material} position={[-1.17, -0.33, -0.17]} />
    </BakedMesh>
  );
};
