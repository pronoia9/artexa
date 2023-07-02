import { SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import { Swiper } from '../../components/Swiper';
import { ProjectsCard, SectionTitle, SectionWrapper, SwiperNavigation } from '../..';
import { dataStore } from '../../../store/dataStore';
import { projectsMotion } from '../../../utils';

const ProjectsSwiper = () => {
  const projects = dataStore((state) => state.projects.projects);

  return (
    <motion.div {...projectsMotion.container} className='row p-30-0'>
      <SectionTitle title='Projects' speed={0.05} />
      <Swiper section='project' navProps={projectsMotion.navigation} autoplay={true} {...projectsMotion.swiper}>
        {projects.map((project, index) => (
          <SwiperSlide key={`projects-swiper-slide-${index}`} className='swiper-slide art-grid art-grid-3-col art-gallery'>
            <ProjectsCard key={`projects-projects-card-${index}`} swiper={true} index={index} {...project} motion={projectsMotion.card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};
export default SectionWrapper(ProjectsSwiper, 'projects-swiper');
