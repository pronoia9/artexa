import { motion } from 'framer-motion';

import { SectionWrapper, ProjectsFilters, ProjectsGrid, ProjectsSwiper, SectionTitle } from '../..';
import { projectsMotion } from '../../../utils';

export const Projects = ({ type = 'grid', limit, ...props }) => {
  return (
    <motion.div className='row p-30-0' {...projectsMotion.container(0.5, 5)} {...props}>
      <SectionTitle title='Projects'>{type === 'grid' && <ProjectsFilters />}</SectionTitle>
      {type === 'grid' && <ProjectsGrid limit={limit} />}
      {type === 'swiper' && <ProjectsSwiper />}
    </motion.div>
  );
};
export default SectionWrapper(Projects, `projects`);
