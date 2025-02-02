'use client';

import { Hero, Counters, Services, Prices, Testimonials, Projects, Contact } from '@/components';

export default function Page() {
  return (
    <>
      <Hero stagger={0.25} />
      <Counters stagger={0.1} delay={0.75} />
      <Services stagger={0.1} delay={0.75} />
      <Prices stagger={0.1} delay={0.75} />
      <Testimonials stagger={0.1} delay={0.75} />
      <Projects stagger={0.25} delay={1} type='grid' limit={true} />
      <Contact stagger={0.25} delay={2.75} />
    </>
  );
}
