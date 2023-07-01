import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { ProjectsFilters, SectionWrapper, SectionTitle, ProjectsCard } from '../..';
import { dataStore } from '../../../store/dataStore';
import { GradientButton } from '../../../styles';
import { lowerCase, setProjectsCount } from '../../../utils';

const ProjectsGrid = ({ limit }) => {
  const data = dataStore((state) => state.projects.projects);
  const [filterKey, setFilterKey] = useState(''),
    [projects, setProjects] = useState(data),
    [cols, setCols] = useState(2),
    [rows, setRows] = useState(3),
    [count, setCount] = useState(2 * 3);
  const topRef = useRef();

  // Checks whether or not all the projects are shown with the filter applied
  const showingAllProjects = () => !(projects.slice(0, count).length < projects.length);

  // Handle filtering projects when filter key changes
  useEffect(() => {
    setProjects(
      [!filterKey
        ? data
        : data.filter(
            (p) => lowerCase(p.categories.join('')).includes(filterKey) || lowerCase(p.tags.join('')).includes(filterKey)),
      ].flat()
    );
  }, [filterKey]);

  // Update projects count whenever cols or rows changes
  useEffect(() => setCount(rows * cols), [rows, cols]);

  const handleButtonClick = () => {
    if (!showingAllProjects()) setRows((prev) => prev + 1);
    else {
      setRows(2);
      setCount(rows);
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container className='row p-30-0'>
      <SectionTitle title='Projects'>
        <ProjectsFilters filterKey={filterKey} setFilterKey={setFilterKey} />
      </SectionTitle>

      <Grid className={`art-grid art-grid-${cols}-col art-gallery`}>
        {projects.map((project, index) => (
          <ProjectsCard key={`projects-grid-item-${index}`} index={index} hide={true} classes='art-grid-item' {...project} />
        ))}

        <Button className='art-buttons-frame acc' onClick={handleButtonClick}>
          View {!showingAllProjects() ? 'More' : 'Less'}
        </Button>
      </Grid>
    </Container>
  );
};
export default SectionWrapper(ProjectsGrid, 'projects-grid');

const Container = styled(motion.div)`
  padding-top: 30px;
`;

const Grid = styled.div``;

const Button = styled(GradientButton)`
  text-align: center;
  display: flex;
  max-width: 200px;
  margin: 0 auto;
`;