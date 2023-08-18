import { BakedMaterial } from '@/components/threejs';

export const TVUnit = ({ nodes, ...props }) => {
  return (
    <BakedMaterial name='TV_Unit' geometry={nodes.TV_Unit.geometry} material={nodes.TV_Unit.material} position={[-2.32, 0.65, 4]}>
      <BakedMaterial name='Console' geometry={nodes.Console.geometry} material={nodes.Console.material} position={[1.95, -0.07, 0.02]} />

      <BakedMaterial
        name='Nintendo_Switch'
        geometry={nodes.Nintendo_Switch.geometry}
        material={nodes.Nintendo_Switch.material}
        position={[2.25, 0.47, 0.08]}
      />

      <BakedMaterial
        name='Plant_(TV_Unit)'
        geometry={nodes['Plant_(TV_Unit)'].geometry}
        material={nodes['Plant_(TV_Unit)'].material}
        position={[-2.23, 0.83, -0.01]}
      />

      <BakedMaterial name='PS5' geometry={nodes.PS5.geometry} material={nodes.PS5.material} position={[-2.15, -0.06, 0.07]} />

      <BakedMaterial name='TV' geometry={nodes.TV.geometry} material={nodes.TV.material} position={[-0.03, 1.26, 0.18]}>
        <mesh name='Screen_(TV)' geometry={nodes['Screen_(TV)'].geometry} material={nodes['Screen_(TV)'].material} position={[0, 0.75, 0.03]} />
      </BakedMaterial>

      <BakedMaterial name='VR' geometry={nodes.VR.geometry} material={nodes.VR.material} position={[-1.62, -0.46, -0.24]} />
    </BakedMaterial>
  );
};
