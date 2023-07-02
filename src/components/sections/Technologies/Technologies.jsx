import { motion } from 'framer-motion';

import { SectionWrapper, SectionTitle, TechnologiesGrid, TechnologiesSwiper } from '../..';
import { technologiesMotion } from '../../../utils';

export const Technologies = ({ type = 'swiper', limit, ...props }) => {
  return (
    <motion.div className='row p-30-0' {...technologiesMotion?.container} {...props}>
      <SectionTitle title='Techolonies' />
      {type === 'grid' && <TechnologiesGrid limit={limit} />}
      {type === 'swiper' && <TechnologiesSwiper />}
    </motion.div>
  );
};
export default SectionWrapper(Technologies, 'technologies');
