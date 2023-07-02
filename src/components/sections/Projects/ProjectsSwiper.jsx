import { SwiperSlide } from 'swiper/react';

import { Swiper } from '../../components/Swiper';
import { ProjectsCard } from '../..';
import { dataStore } from '../../../store/dataStore';
import { projectsMotion } from '../../../utils';

export const ProjectsSwiper = () => {
  const projects = dataStore((state) => state.projects.projects);

  return (
    <Swiper section='project' navProps={projectsMotion.navigation} autoplay={true} {...projectsMotion.swiper}>
      {projects.map((project, index) => (
        <SwiperSlide key={`projects-swiper-slide-${index}`} className='swiper-slide art-grid art-grid-3-col art-gallery'>
          <ProjectsCard key={`projects-projects-card-${index}`} swiper={true} index={index} {...project} motion={projectsMotion.card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
