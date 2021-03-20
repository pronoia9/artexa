import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectSwiperCard from './ProjectSwiperCard';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export default function ProjectsSwiper(props) {
  // start autoplay
  SwiperCore.use([Autoplay]);

  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {/* title / filter bar */}
        <div className='col-lg-12'>
          {/* section title */}
          <div className='art-section-title'>
            {/* title */}
            <div className='art-title-frame'>
              <h4>Projects</h4>
            </div>
          </div>
        </div>

        {/* project items  */}
        <div className={'col-lg-12'}>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            speed={900}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              // when window width is >= 992
              992: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              // when window width is >= 1200
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // when window width is >= 1500
              1500: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation={{ nextEl: '.art-project-swiper-next', prevEl: '.art-project-swiper-prev' }}
            pagination={{ el: '.project-swiper-pagination', type: 'bullets', clickable: true }}
          >
            {props.data.projects.map((p) => (
              <SwiperSlide key={p.id} className='swiper-slide art-grid art-grid-3-col art-gallery'>
                <ProjectCard key={p.id} project={p} class=' art-project-swiper-card' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* swiper navigation */}
        <div className='col-lg-12 p-0-30'>
          <div className='art-slider-navigation'>
            {/* left side */}
            <div className='art-sn-left'>
              {/* slider pagination */}
              <div className='project-swiper-pagination'></div>
            </div>

            {/* right side */}
            <div className='art-sn-right'>
              {/* slider navigation */}
              <div className='art-slider-nav-frame'>
                {/* prev */}
                <div
                  className='art-slider-nav art-project-swiper-prev'
                  role='button'
                  aria-label='Previous slide'
                >
                  <i className='fas fa-chevron-left'></i>
                </div>
                {/* next */}
                <div
                  className='art-slider-nav art-project-swiper-next'
                  role='button'
                  aria-label='Next slide'
                >
                  <i className='fas fa-chevron-right'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
