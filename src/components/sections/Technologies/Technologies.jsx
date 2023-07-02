import { motion } from 'framer-motion';

import { SectionWrapper, SectionTitle } from '../..';
import { technologyMotion } from '../../../utils';

export const Technologies = ({ type = 'swiper', limit, ...props }) => {
  return (
    <motion.div className='row p-30-0' {...technologyMotion?.container()} {...props}>
      <SectionTitle title='Techolonies' />
      {/* {type === 'grid' && <ProjectsGrid limit={limit} />} */}
      {/* {type === 'swiper' && <ProjectsSwiper />} */}
    </motion.div>
  );
};
export default SectionWrapper(Technologies, 'technologies');
