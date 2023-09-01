'use client';

import { BakedMesh, Bookshelf, Chair, CoffeeTable, Couch, Desk, Guitar, TVUnit, PetBed, Tardis } from '@/components/threejs';
import { sceneMotion } from '@/utils';

export const Room = ({ nodes, materials, ...props }) => {
  return (
    <group name='Room_Container' {...props}>
      <BakedMesh name='Room' geometry={nodes.Room.geometry} material={nodes.Room.material} rotation={[Math.PI, 0, Math.PI]} {...sceneMotion.room}>
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
    </group>
  );
};
