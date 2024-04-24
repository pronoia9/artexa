'use client';

import { useRef } from 'react';

import { SectionWrapper, ProjectsFilters, ProjectsGrid, ProjectsSwiper, SectionTitle } from '@/components';

export const Projects = SectionWrapper(({ type = 'grid', ...props }) => {
  const ref = useRef(null);

  // TODO
  return (
    <>
      <SectionTitle title='Projects (currently being edited/added on)' ref={ref}>
        {type === 'grid' && <ProjectsFilters />}
      </SectionTitle>
      {type === 'grid' && <ProjectsGrid {...props} />}
      {type === 'swiper' && <ProjectsSwiper {...props} />}
    </>
  );
}, `projects`);
