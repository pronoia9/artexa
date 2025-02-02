'use client';

import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

import { SectionTitle, SectionWrapper, Swiper, TestimonialCard } from '@/components';
import { testimonials as data } from '@/data';

export const Testimonials = SectionWrapper(() => {
  const swiperOptions = {
    modules: null,
    spaceBetween: 30,
    slidesPerView: 3,
    speed: 1500,
    autoplay: { delay: 5000 },
    breakpoints: { 320: { slidesPerView: 1 }, 640: { slidesPerView: 2 }},
    navigation: true,
    pagination: true,
  };

  return (
    <Container>
      <SectionTitle title={data.title} />
      <Swiper section='testimonials' autoplay={true} swiperOptions={swiperOptions} navigation={false}>
        {data.list.map((testimonial, index) => (
          <SwiperSlide key={`testimonial-${index}`}>
            <TestimonialCard key={`testimonial-${index}-${testimonial?.title}`} {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
});

const Container = styled.div`
  &,
  .art-testimonial-slider {
    height: 100%;
    width: 100%;
    overflow: visible !important;
  }
  
  .swiper-wrapper {
  }

  .swiper-slide {
  }
`;