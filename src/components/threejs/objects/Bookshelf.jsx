import { BakedMesh } from '@/components/threejs';

export const Bookshelf = ({ nodes, ...props }) => {
  return (
    <BakedMesh name='Bookshelf' geometry={nodes.Bookshelf.geometry} material={nodes.Bookshelf.material} position={[3.75, 2.95, -3.86]} {...props}>
      <BakedMesh name='Elephants' geometry={nodes.Elephants.geometry} material={nodes.Elephants.material} position={[0.46, 2.78, 0.13]} />
    </BakedMesh>
  );
};
