'use client';

import { useEffect, useRef, useState } from 'react';
import { RepeatWrapping, sRGBEncoding } from 'three';

import { BakedMesh } from '@/components/threejs';

const videoOptions = { crossOrigin: 'Anonymous', loop: false, muted: false, volume: 0.25 };

export const TVUnit = ({ nodes, ...props }) => {
  const groupRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [active, setActive] = useState('tv2');
  const [videos] = useState({
    tv1: Object.assign(document.createElement('video'), { src: `/3d/tv1.mp4`, ...videoOptions }),
    tv2: Object.assign(document.createElement('video'), { src: `/3d/tv2.mp4`, ...videoOptions }),
    nintendo: Object.assign(document.createElement('video'), { src: `/3d/nintendo.mp4`, ...videoOptions }),
  });
  const [hoveredItem, setHoveredItem] = useState(null);
  // const [volume, setVolume] = useState(1);

  const handleClick = (e) => {
    if (e.object.name === 'Nintendo_Switch' && active !== 'nintendo') setActive('nintendo');
    else if (e.object.name === 'TV_Thing') setActive((prev) => (prev === 'tv1' ? 'tv2' : 'tv1'));
    setIsPlaying((prev) => !prev);
  };

  const handleDoubleClick = () => {
    videos[active].pause();
    videos[active].currentTime = 0;
    setIsPlaying(false);
  };

  // TODO: Maybe add an option to change the volume on hover & mouse scroll. Look into suspending scroll.offset within these conditions as well.
  // const handleMouseWheel = (e) => { };

  useEffect(() => { isPlaying ? videos[active].play() : videos[active].pause(); }, [isPlaying]);

  useEffect(() => {
    Object.values(videos).forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
    videos[active].play();
  }, [active]);

  useEffect(() => void videos[active].pause(), []);

  // useEffect(() => { window.addEventListener('wheel', handleMouseWheel); return () => { window.removeEventListener('wheel', handleMouseWheel); }; }, []);
  // useEffect(() => { if (isPlaying && hover) videos[active].volume = volume; }, [volume]);

  return (
    <BakedMesh
      ref={groupRef}
      name='TV_Unit'
      geometry={nodes.TV_Unit.geometry}
      material={nodes.TV_Unit.material}
      position={[-1.68, 0.47, 2.91]}
      onPointerOver={(e) => void setHoveredItem(e.object.name)}
      onPointerOut={() => void setHoveredItem(null)}
      {...props}
    >
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
        onDoubleClick={handleDoubleClick}
        hovered={hoveredItem === 'Nintendo_Switch'}
      />

      <BakedMesh
        name='TV_Thing'
        geometry={nodes.TV_Thing.geometry}
        material={nodes.TV_Thing.material}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onPointerOver={() => void setHoveredItem('TV_Thing')}
        hovered={hoveredItem === 'TV_Thing'}
      />

      <BakedMesh
        name='TV'
        geometry={nodes.TV.geometry}
        material={nodes.TV.material}
        position={[-0.02, 0.92, 0.13]}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        hovered={hoveredItem === 'TV' || hoveredItem === 'Screen_(TV)'}
      >
        <mesh
          name='Screen_(TV)'
          geometry={nodes['Screen_(TV)'].geometry}
          material={nodes['Screen_(TV)'].Screen}
          position={[0, 0.55, 0.02]}
          scale={1.01}
        >
          <meshStandardMaterial toneMapped={false}>
            <videoTexture
              key={`videoTexture-${active}`}
              attach='map'
              args={[videos[active]]}
              encoding={sRGBEncoding}
              flipY={true}
              wrapS={RepeatWrapping}
              repeat-x={-1}
            />
          </meshStandardMaterial>
        </mesh>
      </BakedMesh>

      <BakedMesh name='VR' geometry={nodes.VR.geometry} material={nodes.VR.material} position={[-1.17, -0.33, -0.17]} />
    </BakedMesh>
  );
};
