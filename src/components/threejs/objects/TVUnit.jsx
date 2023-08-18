import { BakedMaterial } from '@/components/threejs';

export const TVUnit = ({ nodes, ...props }) => {
  return (
    <BakedMaterial name='TV_Unit' geometry={nodes.TV_Unit.geometry} material={nodes.TV_Unit.material} position={[0, 3.15, 4.87]}>
      <BakedMaterial name='Console' geometry={nodes.Console.geometry} material={nodes.Console.material} />
      <BakedMaterial name='Nintendo_Switch' geometry={nodes.Nintendo_Switch.geometry} material={nodes.Nintendo_Switch.material} />
      <BakedMaterial name='Plant_(TV_Unit)' geometry={nodes['Plant_(TV_Unit)'].geometry} material={nodes['Plant_(TV_Unit)'].material} />
      <BakedMaterial name='PS5' geometry={nodes.PS5.geometry} material={nodes.PS5.material} />
      <BakedMaterial name='TV' geometry={nodes.TV.geometry} material={nodes.TV.material}>
        <mesh name='Screen_(TV)' geometry={nodes['Screen_(TV)'].geometry} material={nodes['Screen_(TV)'].material} />
      </BakedMaterial>
      <BakedMaterial name='VR' geometry={nodes.VR.geometry} material={nodes.VR.material} />
    </BakedMaterial>
  );
};
