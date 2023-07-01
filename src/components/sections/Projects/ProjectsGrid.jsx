import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { ProjectsFilter, SectionWrapper, SectionTitle, ProjectsCard } from '../..';
import { dataStore } from '../../../store/dataStore';

const ProjectsGrid = () => {
  const data = dataStore((state) => state.projects);
  const { filters, projects } = data;

  return (
    <Container>
      <SectionTitle title='Projects'>
        <ProjectsFilter />
      </SectionTitle>
      <div className={'art-grid art-grid-2-col art-gallery'}>
        {data.projects.map((project, index) => (
          <ProjectsCard key={`projects-grid-item-${index}`} index={index} classes='art-grid-item' {...project} />
        ))}
      </div>
    </Container>
  );
};
export default SectionWrapper(ProjectsGrid, 'projects-grid');

const Container = styled(motion.div)`
  padding-top: 30px;
`;
