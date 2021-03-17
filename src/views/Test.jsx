import React, { useState } from 'react';
import Project from '../components/Projects/Project';
import ProjectsFilter from '../components/Projects/ProjectsFilter';
import projects from '../data/projects.json';
import './test.css';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export default function Test() {
  // state for storing the filter keyword, with an initial value of null, which means no filter is applied
  const [filterKey, setFilterKey] = useState(null);

  return (
    <div className=''>
      <div className=''>
        {/* title bar */}
        <div className='col-lg-12 test'>
          {/* section title */}
          <div className='art-section-title test'>
            {/* title frame */}
            <div className='art-title-frame test'>
              <h4>Projects</h4>
            </div>
            {/* right frame (filter options) */}
            <div className='art-right-frame test'>
              <div className='art-filter test'>
                {projects.filter.map((d) => {
                  const { id, category, dataFilter } = d;
                  let className = '';
                  // if the current filterkey matches the filyer types key
                  if (filterKey === dataFilter) {
                    // then we're on this filter, so send something to activate it
                    className = ' art-current test';
                  }
                  return (
                    <ProjectsFilter
                      key={id}
                      id={id}
                      category={category}
                      dataFilter={dataFilter}
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
        <div className='test'>
          {/* <Swiper
            className=''
            spaceBetween={30}
            slidesPerView={3}
            slidesPerColumn={3}
            slidesPerColumnFill={'row'}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop={false}
          >
            <SwiperSlide>
              <div>
                <a  class=''>
                  <img
                    src='https://images.unsplash.com/photo-1613406328782-23305286af33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=772&amp;q=80'
                    alt='item'
                  />
                  <span class='art-item-hover'>
                    <i class='fas fa-expand' aria-hidden='true' />
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a class='art-a art-portfolio-item-frame art-square'>
                  <img
                    src='https://images.unsplash.com/photo-1613406328782-23305286af33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=772&amp;q=80'
                    alt='item'
                  />
                  <span class='art-item-hover'>
                    <i class='fas fa-expand' aria-hidden='true' />
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a class='art-a art-portfolio-item-frame art-square'>
                  <img
                    src='https://images.unsplash.com/photo-1613406328782-23305286af33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=772&amp;q=80'
                    alt='item'
                  />
                  <span class='art-item-hover'>
                    <i class='fas fa-expand' aria-hidden='true' />
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a class='art-a art-portfolio-item-frame art-square'>
                  <img
                    src='https://images.unsplash.com/photo-1613406328782-23305286af33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=772&amp;q=80'
                    alt='item'
                  />
                  <span class='art-item-hover'>
                    <i class='fas fa-expand' aria-hidden='true' />
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a class='art-a art-portfolio-item-frame art-square'>
                  <img
                    src='https://images.unsplash.com/photo-1613406328782-23305286af33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=772&amp;q=80'
                    alt='item'
                  />
                  <span class='art-item-hover'>
                    <i class='fas fa-expand' aria-hidden='true' />
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a class='art-a art-portfolio-item-frame art-square'>
                  <img
                    src='https://images.unsplash.com/photo-1613406328782-23305286af33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=772&amp;q=80'
                    alt='item'
                  />
                  <span class='art-item-hover'>
                    <i class='fas fa-expand' aria-hidden='true' />
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a class='art-a art-portfolio-item-frame art-square'>
                  <img
                    src='https://images.unsplash.com/photo-1613406328782-23305286af33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=772&amp;q=80'
                    alt='item'
                  />
                  <span class='art-item-hover'>
                    <i class='fas fa-expand' aria-hidden='true' />
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a class='art-a art-portfolio-item-frame art-square'>
                  <img
                    src='https://images.unsplash.com/photo-1613406328782-23305286af33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=772&amp;q=80'
                    alt='item'
                  />
                  <span class='art-item-hover'>
                    <i class='fas fa-expand' aria-hidden='true' />
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a class='art-a art-portfolio-item-frame art-square'>
                  <img
                    src='https://images.unsplash.com/photo-1613406328782-23305286af33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=772&amp;q=80'
                    alt='item'
                  />
                  <span class='art-item-hover'>
                    <i class='fas fa-expand' aria-hidden='true' />
                  </span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a class='art-a art-portfolio-item-frame art-square'>
                  <img
                    src='https://images.unsplash.com/photo-1613406328782-23305286af33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=772&amp;q=80'
                    alt='item'
                  />
                  <span class='art-item-hover'>
                    <i class='fas fa-expand' aria-hidden='true' />
                  </span>
                </a>
              </div>
            </SwiperSlide>
          </Swiper> */}
        </div>
      </div>
    </div>
  );
}
