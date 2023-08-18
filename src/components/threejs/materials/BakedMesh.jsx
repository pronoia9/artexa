import { useTexture } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

import { bakedDay, bakedNeutral, bakedNight } from '@/components/threejs';
import { dataStore, isDarkTheme, rngInRange } from '@/utils';

export const BakedMesh = ({ variants, children, ...props }) => {
  const { theme } = dataStore((store) => ({ theme: store.theme }));
  const bakedTextureDay = useTexture(bakedDay),
    bakedTextureNight = useTexture(bakedNight),
    bakedTextureNeutral = useTexture(bakedNeutral);
  
  return (
    <motion.mesh
      variants={{
        hidden: { scale: 0, ...variants?.hidden },
        visible: { scale: 1, transition: { delay: rngInRange(0.25, 0.75) }, ...variants?.visible },
      }}
      {...props}
    >
      {/* <motion.meshBasicMaterial map={bakedNeutral} map-flipY={false} /> */}
      {children}
    </motion.mesh>
  );
};
