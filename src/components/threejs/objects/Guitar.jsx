import { BakedMaterial } from '@/components/threejs';

export const Guitar = ({ nodes, ...props }) => {
  return <BakedMaterial name='Guitar' geometry={nodes.Guitar.geometry} material={nodes.Guitar.material} position={[0, 3.15, 4.87]} />;
};
