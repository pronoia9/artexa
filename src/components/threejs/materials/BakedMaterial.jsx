import { useTexture } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

import { bakedDay, bakedNeutral, bakedNight } from '@/components/threejs';
import { dataStore, isDarkTheme } from '@/utils';

export const BakedMaterial = ({ children, ...props }) => {
  const { theme } = dataStore((store) => ({ theme: store.theme }));
  const bakedTextureDay = useTexture(bakedDay),
    bakedTextureNight = useTexture(bakedNight),
    bakedTextureNeutral = useTexture(bakedNeutral);

  return (
    <motion.mesh {...props}>
      {/* <motion.meshBasicMaterial map={bakedNeutral} map-flipY={false} /> */}
      {children}
    </motion.mesh>
  );
};
