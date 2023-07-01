import { styled } from 'styled-components';
import { ProjectsFilter, SectionWrapper, SectionTitle, Card } from '../..';
import { dataStore } from '../../../store/dataStore';
import { motion } from 'framer-motion';

const ProjectsGrid = () => {
  const data = dataStore((state) => state.projects);
  const { filters, projects } = data;

  return (
    <Container>
      <SectionTitle title='Projects'>
        <ProjectsFilter />
      </SectionTitle>
      <div className={'art-grid art-grid-2-col art-gallery'}>
        {data.projects.map((project, index) => <Card key={`projects-grid-item-${index}`} index={index} {...project} />)}
      </div>
    </Container>
  );
};
export default SectionWrapper(ProjectsGrid, 'projects-grid');

const Container = styled(motion.div)`
  padding-top: 30px;
`;
