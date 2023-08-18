import { BakedMaterial } from '@/components/threejs';

export const Chair = ({ nodes, ...props }) => {
  return (
    <BakedMaterial name='Chair' geometry={nodes.Chair.geometry} material={nodes.Chair.material} position={[0, 3.15, 4.87]} {...props}>
      <BakedMaterial
        name='Chair_Seat'
        geometry={nodes.Chair_Seat.geometry}
        material={nodes.Chair_Seat.material}
        position={[1, -1.72, -4.74]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
    </BakedMaterial>
  );
};
