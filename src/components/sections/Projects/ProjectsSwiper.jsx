import { Swiper } from '../../components/Swiper';
import { dataStore } from '../../../store/dataStore';
import { projectsMotion } from '../../../utils';

export const ProjectsSwiper = (props) => {
  const data = dataStore((state) => state.projects.projects);

  return <Swiper section='project' data={data} autoplay={true} navProps={projectsMotion.navigation} {...props} {...projectsMotion.swiper} />;
};
