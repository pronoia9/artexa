'use client';

import { SectionTitle, SectionWrapper, TestimonialsCard } from '@/components';
import { testimonials as data } from '@/data';

export const Testimonials = SectionWrapper(() => {
  return (
    <>
      <SectionTitle title={data.title} />
      {data.list.map((testimonial, index) => (
        <TestimonialsCard key={`testimonials-${index}-${testimonial?.title}`} {...testimonial} />
      ))}
    </>
  );
});
