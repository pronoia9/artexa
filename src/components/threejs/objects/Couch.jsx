import { motion } from 'framer-motion-3d';

import { BakedMaterial } from '@/components/threejs';

export const Couch = ({ nodes, ...props }) => {
  return (
    <BakedMaterial
      name='Couch'
      geometry={nodes.Couch.geometry}
      material={nodes.Couch.material}
      position={[-2.01, 0.97, -3.02]}
      {...props}
      variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 5, bounce: 0.5 } } }}
    >
      <BakedMaterial
        name='Octopus'
        geometry={nodes.Octopus.geometry}
        material={nodes.Octopus.material}
        position={[-2.55, 0.65, -0.69]}
        variants={{ hidden: { scale: 0 } }}
      />
    </BakedMaterial>
  );
};
