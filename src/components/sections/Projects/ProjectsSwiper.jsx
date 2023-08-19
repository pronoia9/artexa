import { Swiper } from '@/components';
import { projectsMotion, projects as data } from '@/utils';

export const ProjectsSwiper = (props) => {
  if (!data) return;
  return <Swiper section='project' data={data.projects} autoplay={true} navProps={projectsMotion.navigation} {...props} {...projectsMotion.swiper} />;
};
