export const Emissives = () => {
  return (
    <group name='Emissives' position={[0.01, -0.3, -0.01]}>
      <mesh
        name='Elgato_Light'
        geometry={nodes.Elgato_Light.geometry}
        material={nodes.Elgato_Light.material}
        position={[-2.93, 3.63, 0.05]}
        rotation={[1.48, -0.25, -1.94]}
      />

      <mesh
        name='Screen_(Macbook)'
        geometry={nodes['Screen_(Macbook)'].geometry}
        material={materials.Screen}
        position={[-2.76, 2.51, -1.61]}
        rotation={[1.56, 0.05, -1.27]}
      />

      <mesh
        name='Screen_(Monitor)'
        geometry={nodes['Screen_(Monitor)'].geometry}
        material={materials.Screen}
        position={[-2.9, 2.78, -0.21]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
      />

      <mesh
        name='Screen_(TV)'
        geometry={nodes['Screen_(TV)'].geometry}
        material={materials.Screen}
        position={[1.7, 2.24, -3.05]}
        rotation={[Math.PI, 0, Math.PI]}
      />

      <group name='Tardis_Lights' position={[-2.33, 2.14, -4.82]} rotation={[-0.01, 0.87, 0.06]}>
        <mesh name='Tardis001' geometry={nodes.Tardis001.geometry} material={materials['TARDIS black_glass']} />
        <mesh name='Tardis001_1' geometry={nodes.Tardis001_1.geometry} material={materials['TARDIS white_glass']} />
        <mesh name='Tardis001_2' geometry={nodes.Tardis001_2.geometry} material={materials['TARDIS bulb_material']} />
      </group>
    </group>
  );
};
