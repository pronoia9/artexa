import React, { useState } from 'react';
import ProjectsFilter from './ProjectsFilter';
import ProjectSwiperCard from './ProjectSwiperCard';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export default function ProjectsSwiper(props) {
  // state for storing the filter keyword, with an initial value of null, which means no filter is applied
  const [filterKey, setFilterKey] = useState(null);

  // start autoplay
  SwiperCore.use([Autoplay]);

  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {/* title / filter bar */}
        <div className='col-lg-12'>
          {/* section title */}
          <div className='art-section-title'>
            {/* right frame (filter options) */}
            <div className='art-right-frame'>
              <div className='art-filter'>
                {props.data.filter.map((filter) => {
                  let className = '';
                  // if the current filterkey matches the filyer types key
                  if (filterKey === filter.dataFilter) {
                    // then we're on this filter, so send something to activate it
                    className = ' art-current';
                  }
                  return (
                    <ProjectsFilter
                      key={filter.id}
                      filter={filter}
                      filterKey={filterKey}
                      setFilterKey={setFilterKey}
                      className={className}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* project items  */}
        <div className={'col-lg-12'}>
          <Swiper
            className=''
            spaceBetween={30}
            slidesPerView={3}
            speed={1400}
            autoplay={{ delay: 4000 }}
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
            {props.data.projects.map((p) => {
              // if we dont have a filter key, show everything
              if (!filterKey) {
                return (
                  <SwiperSlide className='swiper-slide art-grid art-grid-3-col art-gallery'>
                    <ProjectSwiperCard key={p.id} project={p} />
                  </SwiperSlide>
                );
              }
              // if the project includes the searched filter in its filters list, then display it
              else if (p.dataFilter.includes(filterKey)) {
                return (
                  <SwiperSlide className='swiper-slide art-grid art-grid-3-col art-gallery'>
                    <ProjectSwiperCard key={p.id} project={p} />
                  </SwiperSlide>
                );
              }
              return <></>;
            })}
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
