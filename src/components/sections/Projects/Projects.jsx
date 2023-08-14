'use client';

import { useRef } from 'react';

import { SectionWrapper, ProjectsFilters, ProjectsGrid, ProjectsSwiper, SectionTitle } from '@/components';

export default SectionWrapper(({ type = 'grid', ...props }) => {
  const ref = useRef(null);

  return (
    <>
      <SectionTitle title='Projects' ref={ref}>
        {type === 'grid' && <ProjectsFilters />}
      </SectionTitle>
      {type === 'grid' && <ProjectsGrid {...props} />}
      {type === 'swiper' && <ProjectsSwiper {...props} />}
    </>
  );
}, `projects`);
