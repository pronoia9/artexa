import { BakedMaterial } from '@/components/threejs';

export const Bookshelf = ({ nodes, ...props }) => {
  return (
    <BakedMaterial name='Bookshelf' geometry={nodes.Bookshelf.geometry} material={nodes.Bookshelf.material} position={[0, 3.15, 4.87]} {...props}>
      <BakedMaterial name='Elephants' geometry={nodes.Elephants.geometry} material={nodes.Elephants.material} />
    </BakedMaterial>
  );
};
