import { motion } from 'framer-motion-3d';

import { colors } from '@/styles';
import { dataStore } from '@/utils';

export const Cube = ({ nodes, ...props }) => {
  const { accent } = dataStore((store) => ({ theme: store.accent }));

  return (
    <motion.group name='Cube' position={[4.64, 0, 4.7]} rotation={[-Math.PI, 0, -Math.PI]} scale={[5.03, 3.42, 5.03]} {...props}>
      <mesh name='Cube_1' geometry={nodes.Cube_1.geometry} material={nodes.Cube_1.material}>
        <meshBasicMaterial color={colors[accent ? accent : 'purple']['accent1']} />
      </mesh>
      <mesh name='Cube_2' geometry={nodes.Cube_2.geometry} material={nodes.Cube_2.material}>
        <meshBasicMaterial color={colors[accent ? accent : 'purple']['accent2']} />
      </mesh>
    </motion.group>
  );
};
