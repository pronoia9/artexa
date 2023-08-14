import { SwiperSlide } from 'swiper/react';

import { Swiper, HobbiesCard } from '@/components';
import { about as data } from '@/utils';

export const Hobbies = () => {
  const swiperOptions = {
    modules: null,
    spaceBetween: 0,
    slidesPerView: 5,
    speed: 500,
    autoplay: { delay: 2000 },
    breakpoints: { 320: { slidesPerView: 3 }, 640: { slidesPerView: 4 }, 1200: { slidesPerView: 5 } },
    navigation: false,
    pagination: false,
  };

  return (
    <Swiper section='hobbies' autoplay={true} swiperOptions={swiperOptions} navigation={false}>
      {data.hobbies.map((hobby, index) => (
        <SwiperSlide key={`hobbies-${index}`}>
          <HobbiesCard {...hobby} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
