import React from 'react';
import SectionTitle from '../Templates/Text/SectionTitle';
import HobbiesCard from './HobbiesCard';
import SwiperNavigation from '../Templates/Swiper/SwiperNavigation';
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, A11y]);

export default function Hobbies(props) {
  SwiperCore.use([Autoplay]);

  return (
    <div className='container-fluid'>
      <div className='row p-30-30'>
        {/* if title is true/enabled, then render title */}
        {props.title && <SectionTitle title={props.data.title} />}

        <div className='col-lg-12'>
          <Swiper
            spaceBetween={0}
            slidesPerView={5}
            speed={500}
            autoplay={{ delay: 2000 }}
            breakpoints={{
              320: { slidesPerView: 3 },
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
              1500: { slidesPerView: 5 },
            }}
            navigation={{ nextEl: '.art-hobbies-swiper-next', prevEl: '.art-hobbies-swiper-prev' }}
            pagination={{ el: '.hobbies-swiper-pagination', type: 'bullets', clickable: true }}
          >
            {props.data.hobbies.map((hobby) => (
              <SwiperSlide key={hobby.id}>
                <HobbiesCard
                  key={hobby.id}
                  title={hobby.title}
                  image={hobby.image}
                  fancybox={hobby.fancybox}
                  section='hobbies'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* render navigation only if its enabled/true */}
        {props.navigation && <SwiperNavigation section='hobbies' />}
      </div>
    </div>
  );
}
