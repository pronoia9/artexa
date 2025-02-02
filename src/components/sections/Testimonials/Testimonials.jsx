'use client';

import { SwiperSlide } from 'swiper/react';

import { SectionTitle, SectionWrapper, Swiper, TestimonialCard } from '@/components';
import { testimonials as data } from '@/data';

export const Testimonials = SectionWrapper(() => {
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
    <>
      <SectionTitle title={data.title} />
      <Swiper section='testimonials' autoplay={true} swiperOptions={swiperOptions} navigation={false}>
        {data.list.map((testimonial, index) => (
          <SwiperSlide key={`testimonial-${index}`}>
            <TestimonialCard key={`testimonial-${index}-${testimonial?.title}`} {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});
