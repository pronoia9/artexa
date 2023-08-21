'use client';

import { motion } from 'framer-motion-3d';

import { BakedMesh } from '@/components/threejs';

const Elephant = (props) => <BakedMesh {...props} />;

export const Bookshelf = ({ nodes, ...props }) => {
  return (
    <BakedMesh name='Bookshelf' geometry={nodes.Bookshelf.geometry} material={nodes.Bookshelf.material} position={[2.72, 2.14, -2.8]} {...props}>
      <motion.group name='Elephants' position={[0.34, 2.01, 0.09]} rotation={[-Math.PI, 0, -Math.PI]}>
        <Elephant name='Elephant001' geometry={nodes.Elephant001.geometry} material={nodes.Elephant001.material} rotation={[Math.PI, 0, Math.PI]} />
        <Elephant name='Elephant002' geometry={nodes.Elephant002.geometry} material={nodes.Elephant002.material} rotation={[Math.PI, 0, Math.PI]} />
        <Elephant name='Elephant003' geometry={nodes.Elephant003.geometry} material={nodes.Elephant003.material} rotation={[Math.PI, 0, Math.PI]} />
        <Elephant name='Elephant004' geometry={nodes.Elephant004.geometry} material={nodes.Elephant004.material} rotation={[Math.PI, 0, Math.PI]} />
        <Elephant name='Elephant005' geometry={nodes.Elephant005.geometry} material={nodes.Elephant005.material} rotation={[Math.PI, 0, Math.PI]} />
        <Elephant name='Elephant006' geometry={nodes.Elephant006.geometry} material={nodes.Elephant006.material} rotation={[Math.PI, 0, Math.PI]} />
        <Elephant name='Elephant007' geometry={nodes.Elephant007.geometry} material={nodes.Elephant007.material} rotation={[Math.PI, 0, Math.PI]} />
        <Elephant name='Elephant008' geometry={nodes.Elephant008.geometry} material={nodes.Elephant008.material} rotation={[Math.PI, 0, Math.PI]} />
        <Elephant name='Elephant009' geometry={nodes.Elephant009.geometry} material={nodes.Elephant009.material} rotation={[Math.PI, 0, Math.PI]} />
        <Elephant name='Elephant010' geometry={nodes.Elephant010.geometry} material={nodes.Elephant010.material} rotation={[Math.PI, 0, Math.PI]} />
        <Elephant name='Elephant011' geometry={nodes.Elephant011.geometry} material={nodes.Elephant011.material} rotation={[Math.PI, 0, Math.PI]} />
        <Elephant name='Elephant012' geometry={nodes.Elephant012.geometry} material={nodes.Elephant012.material} rotation={[Math.PI, 0, Math.PI]} />
      </motion.group>
    </BakedMesh>
  );
};
