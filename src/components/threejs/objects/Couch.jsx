import { BakedMaterial } from '@/components/threejs';

export const Couch = ({ nodes, ...props }) => {
  return (
    <BakedMaterial name='Couch' geometry={nodes.Couch.geometry} material={nodes.Couch.material} position={[0, 3.15, 4.87]} {...props}>
      <BakedMaterial name='Octopus' geometry={nodes.Octopus.geometry} material={nodes.Octopus.material} />
    </BakedMaterial>
  );
};
