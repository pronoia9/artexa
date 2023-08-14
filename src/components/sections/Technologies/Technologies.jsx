'use client';

import { useRef } from 'react';

import { SectionWrapper, SectionTitle, TechnologiesGrid, TechnologiesSwiper } from '@/components';

export default SectionWrapper(({ type = 'swiper', ...props }) => {
  const ref = useRef(null);

  return (
    <>
      <SectionTitle title='Technologies' ref={ref} />
      {type === 'grid' && <TechnologiesGrid {...props} />}
      {type === 'swiper' && <TechnologiesSwiper {...props} />}
    </>
  );
}, 'technologies');
