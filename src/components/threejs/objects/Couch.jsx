import { motion } from 'framer-motion-3d';

import { BakedMesh } from '@/components/threejs';

export const Couch = ({ nodes, ...props }) => {
  return (
    <BakedMesh
      name='Couch'
      geometry={nodes.Couch.geometry}
      material={nodes.Couch.material}
      position={[-2.01, 0.97, -3.02]}
      {...props}
    >
      <BakedMesh
        name='Octopus'
        geometry={nodes.Octopus.geometry}
        material={nodes.Octopus.material}
        position={[-2.55, 0.65, -0.69]}
        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
      />
    </BakedMesh>
  );
};
