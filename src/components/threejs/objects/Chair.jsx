import { BakedMaterial } from '@/components/threejs';

export const Chair = ({ nodes, ...props }) => {
  return (
    <BakedMaterial name='Chair' geometry={nodes.Chair.geometry} material={nodes.Chair.material} position={[1, 0.35, 0.81]} {...props}>
      <BakedMaterial
        name='Chair_Seat'
        geometry={nodes.Chair_Seat.geometry}
        material={nodes.Chair_Seat.material}
        position={[0, 1.66, 0.19]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
    </BakedMaterial>
  );
};
