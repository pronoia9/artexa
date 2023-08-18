import { useTexture } from '@react-three/drei';

import { bakedDay, bakedNeutral, bakedNight } from '@/components/threejs';
import { dataStore, isDarkTheme } from '@/utils';

export const BakedMaterial = ({ children, ...props }) => {
  const { theme } = dataStore((store) => ({ theme: store.theme }));
  const bakedTextureDay = useTexture(bakedDay),
    bakedTextureNight = useTexture(bakedNight),
    bakedTextureNeutral = useTexture(bakedNeutral);

  return (
    <mesh {...props}>
      <meshBasicMaterial map={isDarkTheme(theme) ? bakedTextureNight : bakedTextureDay} map-flipY={false} />
      {children}
    </mesh>
  );
};
