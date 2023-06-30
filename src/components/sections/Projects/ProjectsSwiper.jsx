import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import { ProjectsCard, SectionTitle, SectionWrapper, SwiperNavigation } from '../..';
import { dataStore } from '../../../store/dataStore';
import { projectsMotion } from '../../../utils';

const ProjectsSwiper = () => {
  const projects = dataStore((state) => state.projects.projects);
  SwiperCore.use([Autoplay]);

  return (
    <motion.div {...projectsMotion.container}>
      <SectionTitle title='Projects' speed={0.05} />

      <motion.div {...projectsMotion.swiper}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          speed={900}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }}
          navigation={{ nextEl: '.art-project-swiper-next', prevEl: '.art-project-swiper-prev' }}
          pagination={{ el: '.project-swiper-pagination', type: 'bullets', clickable: true }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={`projects-swiper-slide-${index}`} className='swiper-slide art-grid art-grid-3-col art-gallery'>
              <ProjectsCard key={`projects-projects-card-${index}`} swiper={true} index={index} {...project} motion={projectsMotion.card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <SwiperNavigation section='project' {...projectsMotion.navigation} />
    </motion.div>
  );
};
export default SectionWrapper(ProjectsSwiper, 'projects-swiper');
