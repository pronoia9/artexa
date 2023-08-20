'use client';

import { useEffect, useState } from 'react';

import { BakedMesh } from '@/components/threejs';
import { rngInRange } from '@/utils';

export const Chair = ({ nodes, ...props }) => {
  const [rotateZ, setRotateZ] = useState([-Math.PI, null]);

  useEffect(() => {
    let timeout;
    const wander = () => {
      setRotateZ((prev) => [prev[1] || -Math.PI, parseFloat(prev) + rngInRange(-Math.PI * 0.1, Math.PI * 0.1)]);
      timeout = setTimeout(wander, (1 + Math.random() * 5) * 1000);
    };
    wander();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <BakedMesh name='Chair' geometry={nodes.Chair.geometry} material={nodes.Chair.material} position={[0.73, 0.26, 0.59]} {...props}>
      <BakedMesh
        key={`chair-seat-${rotateZ}`}
        name='Chair_Seat'
        geometry={nodes.Chair_Seat.geometry}
        material={nodes.Chair_Seat.material}
        position={[0, 0.59, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        {...(rotateZ[1]
          ? {
              variants: {
                hidden: { scale: 1, rotateZ: rotateZ[0] },
                visible: { scale: 1, rotateZ: rotateZ[1], transition: { type: 'ease', duration: 0.5 || Math.abs(rotateZ[1] - rotateZ[0]) } },
              },
            }
          : {})}
      />
    </BakedMesh>
  );
};
