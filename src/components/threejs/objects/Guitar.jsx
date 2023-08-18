import { BakedMaterial } from '@/components/threejs';

export const Guitar = ({ nodes, ...props }) => {
  return <BakedMaterial name='Guitar' geometry={nodes.Guitar.geometry} material={nodes.Guitar.material} position={[3.09, 1.73, -2.94]} {...props} />;
};
