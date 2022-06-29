import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TechnologiesCard from './TechnologiesCard';
import SectionTitle from '../Templates/Text/SectionTitle';
import SwiperNavigation from '../Templates/Swiper/SwiperNavigation';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export default function TechnologiesSwiper(props) {
  // start autoplay
  SwiperCore.use([Autoplay]);
  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {/* title */}
        <SectionTitle title={props.data.title} />

        {/* posts */}
        <div className='col-lg-12'>
          <Swiper
            className='art-blog-slider'
            spaceBetween={30}
            slidesPerView={3}
            speed={1400}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              // when window width is >= 320px
              320: { slidesPerView: 1, spaceBetween: 10, },
              // when window width is >= 480px
              480: { slidesPerView: 1, spaceBetween: 10, },
              // when window width is >= 640px
              640: { slidesPerView: 2, spaceBetween: 10, },
              // when window width is >= 992
              992: { slidesPerView: 2, spaceBetween: 10, },
              // when window width is >= 1200
              1200: { slidesPerView: 3, spaceBetween: 30, },
              // when window width is >= 1500
              1500: { slidesPerView: 3, spaceBetween: 30, },
            }}
            navigation={{ nextEl: '.art-blog-swiper-next', prevEl: '.art-blog-swiper-prev' }}
            pagination={{ el: '.blog-swiper-pagination', type: 'bullets', clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            {props.data.posts.map((p) => (
              <SwiperSlide key={p.id} className='swiper-slide'>
                <TechnologiesCard key={p.id} post={p} message={props.data.message} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <SwiperNavigation section='blog' />
      </div>
    </div>
  );
}