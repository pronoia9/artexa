'use client';

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

import { SectionTitle, SectionWrapper, Swiper, TestimonialCard } from '@/components';
import { testimonials as data } from '@/data';

export const Testimonials = SectionWrapper(() => {
  const cardRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  const swiperOptions = {
    spaceBetween: 30,
    slidesPerView: 3,
    speed: 1500,
    autoplay: { delay: 5000 },
    breakpoints: { 320: { slidesPerView: 1 }, 640: { slidesPerView: 2 } },
  };

  useEffect(() => {
    if (cardRefs.current.length) {
      const allHeights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
      const max = Math.max(...allHeights);
      setMaxHeight(max);
    }
  }, [cardRefs.current]);

  return (
    <Container $maxHeight={maxHeight}>
      <SectionTitle title={data.title} />
      <Swiper section='testimonials' autoplay={true} swiperOptions={swiperOptions} navigation pagination>
        {data.list.map((testimonial, index) => (
          <SwiperSlide key={`testimonial-${index}`}>
            <TestimonialCard
              ref={(ref) => (cardRefs.current[index] = ref)}
              key={`testimonial-${index}-${testimonial?.title}`}
              {...testimonial}
            />
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

  .swiper-slide,
  .art-testimonial {
    min-height: ${({ $maxHeight }) => ($maxHeight ? `${$maxHeight}px` : 'auto')};
  }
`;
