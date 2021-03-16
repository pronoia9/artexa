import React from 'react';
import BlogCard from '../components/Blog/BlogCard';
import data from '../data/blog.json';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Blog() {
  return (
    <div className='container-fluid'>
      {/* row */}
      <div className='row'>
        {/* heading */}
        <div className='col-lg-12'>
          {/* title */}
          <div className='art-section-title'>
            <div className='art-title-frame'>
              <h4>Posts</h4>
            </div>
          </div>
        </div>

        {/* posts */}
        <div className='col-lg-12'>
          <Swiper
            className='art-blog-slider'
            spaceBetween={30}
            slidesPerView={3}
            speed={1400}
            autoplay={4000}
            navigation={{ nextEl: '.art-blog-swiper-next', prevEl: '.art-blog-swiper-prev' }}
            pagination={{ el: '.swiper-pagination', type: 'bullets', clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {data.posts.map((p) => (
              <SwiperSlide className='swiper-slide'>
                <BlogCard
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  overview={p.overview}
                  url={p.url}
                  image={p.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* swiper */}
        <div className='col-lg-12'>
          <div className='art-slider-navigation'>
            {/* left side */}
            <div className='art-sn-left'>
              {/* slider pagination */}
              <div className='swiper-pagination'></div>
            </div>

            {/* right side */}
            <div className='art-sn-right'>
              {/* slider navigation */}
              <div className='art-slider-nav-frame'>
                {/* prev */}
                <div
                  className='art-slider-nav art-blog-swiper-prev'
                  role='button'
                  aria-label='Previous slide'
                  aria-disabled={true}
                >
                  <i className='fas fa-chevron-left'></i>
                </div>
                {/* next */}
                <div
                  className='art-slider-nav art-blog-swiper-next'
                  role='button'
                  aria-label='Next slide'
                  aria-disabled={true}
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
