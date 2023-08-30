'use client';

import { BakedMesh, Bookshelf, Chair, CoffeeTable, Couch, Desk, Guitar, TVUnit, PetBed, Tardis } from '@/components/threejs';
import { sceneMotion } from '@/utils';

export const Room = ({ nodes, materials }) => {
  return (
    <BakedMesh
      name='Room'
      geometry={nodes.Room.geometry}
      material={nodes.Room.material}
      position={[-0.01, 0.3, 0.01]}
      rotation={[Math.PI, 0, Math.PI]}
      {...sceneMotion.room}
    >
      <Bookshelf nodes={nodes} />
      <Chair nodes={nodes} />
      <CoffeeTable nodes={nodes} materials={materials} />
      <Couch nodes={nodes} materials={materials} />
      <Desk nodes={nodes} />
      <Guitar nodes={nodes} />
      <PetBed nodes={nodes} materials={materials} />
      <Tardis nodes={nodes} materials={materials} />
      <TVUnit nodes={nodes} />
    </BakedMesh>
  );
};
