import { SectionWrapper, ProjectsFilters, ProjectsGrid, ProjectsSwiper, SectionTitle } from '../..';

export const Projects = ({ type = 'grid', limit, ...props }) => {
  return (
    <>
      <SectionTitle title='Projects'>{type === 'grid' && <ProjectsFilters />}</SectionTitle>
      {type === 'grid' && <ProjectsGrid {...props} />}
      {type === 'swiper' && <ProjectsSwiper {...props} />}
    </>
  );
};
export default SectionWrapper(Projects, `projects`);
