'use client';

import { Swiper } from '@/components';
import { projectsMotion, projects as data } from '@/utils';

export const ProjectsSwiper = (props) => {
  if (!data) return <></>; // ! TEMP

  return <Swiper section='project' data={data.projects} autoplay={true} navProps={projectsMotion.navigation} {...props} {...projectsMotion.swiper} />;
};
