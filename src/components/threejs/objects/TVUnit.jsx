'use client';

import { useEffect, useRef, useState } from 'react';
import { useVideoTexture } from '@react-three/drei';
import { motion as motion3d } from 'framer-motion-3d';

import { BakedMesh } from '@/components/threejs';

export const TVUnit = ({ nodes, ...props }) => {
  const videoMaterialRef = useRef();

  const [videoElement, setVideoElement] = useState(null);
  const [videoSource, setVideoSource] = useState('tv');
  const [isPlaying, setIsPlaying] = useState(false);
  const videoTexture = useVideoTexture(`/3d/${videoSource}.mp4`, {
    unsuspend: 'canplay',
    crossOrigin: 'Anonymous',
    muted: false,
    loop: false,
    start: isPlaying,
  });

  const handleClick = (e) => {
    // if (e.object.name === 'Nintendo_Switch' && videoSource !== 'switch') setVideoSource('switch');
    // else if (e.object.name === 'TV_Thing' && videoSource !== 'tv') setVideoSource('tv');
    setIsPlaying((prev) => !prev);
  };

  // Reset video (pause it at the start)
  const handleVideoReset = () => {
    videoElement && (videoElement.currentTime = 0); // Rewind the video to the beginning
    // setIsPlaying(false); // Set isPlaying to false when the video ends
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (videoMaterialRef.current && videoMaterialRef.current.map) {
      const videoElement = videoMaterialRef.current.map.image;
      setVideoElement(videoElement);
      videoElement.addEventListener('ended', handleVideoReset); // Add an event listener for the "ended" event
      return () => void videoElement.removeEventListener('ended', handleVideoReset); // Clean up the event listener when component unmounts
    }
  }, []);

  useEffect(() => {
    if (videoElement) isPlaying ? videoElement.play() : videoElement.pause();
  }, [videoElement, isPlaying]);

  useEffect(() => {
    console.log('video source changed to', videoSource);
  }, [videoSource]);

  return (
    <BakedMesh name='TV_Unit' geometry={nodes.TV_Unit.geometry} material={nodes.TV_Unit.material} position={[-1.68, 0.47, 2.91]} {...props}>
      <BakedMesh
        name='Plant_(TV_Unit)'
        geometry={nodes['Plant_(TV_Unit)'].geometry}
        material={nodes['Plant_(TV_Unit)'].material}
        position={[-1.62, 0.6, -0.01]}
      />

      <BakedMesh name='Console' geometry={nodes.Console.geometry} material={nodes.Console.material} position={[1.41, -0.05, 0.02]} />

      <BakedMesh name='PS5' geometry={nodes.PS5.geometry} material={nodes.PS5.material} position={[-1.56, -0.04, 0.05]} />

      <BakedMesh
        name='Nintendo_Switch'
        geometry={nodes.Nintendo_Switch.geometry}
        material={nodes.Nintendo_Switch.material}
        position={[1.63, 0.34, 0.06]}
        onClick={handleClick}
        onDoubleClick={handleVideoReset}
      />

      <BakedMesh
        name='TV_Thing'
        geometry={nodes.TV_Thing.geometry}
        material={nodes.TV_Thing.material}
        onClick={handleClick}
        onDoubleClick={handleVideoReset}
      />

      <BakedMesh
        name='TV'
        geometry={nodes.TV.geometry}
        material={nodes.TV.material}
        position={[-0.02, 0.92, 0.13]}
        onClick={handleClick}
        onDoubleClick={handleVideoReset}
      >
        <motion3d.mesh
          name='Screen_(TV)'
          geometry={nodes['Screen_(TV)'].geometry}
          material={nodes['Screen_(TV)'].Screen}
          position={[0, 0.55, 0.02]}
          scale={1.01}
        >
          <meshStandardMaterial
            // key={`tv-screen-material-${videoSource}`}
            ref={videoMaterialRef}
            // color={isPlaying ? null : 'black'}
            map={videoTexture}
            toneMapped={false}
          />
        </motion3d.mesh>
      </BakedMesh>

      <BakedMesh name='VR' geometry={nodes.VR.geometry} material={nodes.VR.material} position={[-1.17, -0.33, -0.17]} />
    </BakedMesh>
  );
};
