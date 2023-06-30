import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProjectsCard, SectionTitle, SectionWrapper, SwiperNavigation } from '../..';
import { dataStore } from '../../../store/dataStore';

const ProjectsSwiper = () => {
  const projects = dataStore((state) => state.projects.projects);
  SwiperCore.use([Autoplay]);

  return (
    <div className='row p-30-0'>
      {/* title */}
      <SectionTitle title='Projects' />

      {/* project items  */}
      <div className='col-lg-12'>
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
              <ProjectsCard key={`projects-projects-card-${index}`} swiper={true} index={index} {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <SwiperNavigation section='project' />
    </div>
  );
};
export default SectionWrapper(ProjectsSwiper, 'projects-swiper');
