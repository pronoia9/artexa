import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { ProjectsFilters, SectionWrapper, SectionTitle, ProjectsCard } from '../..';
import { dataStore } from '../../../store/dataStore';
import { GradientButton } from '../../../styles';
import { lowerCase, projectsMotion, setProjectsCount } from '../../../utils';

const ProjectsGrid = ({ limit }) => {
  const data = dataStore((state) => state.projects.projects);
  const [filterKey, setFilterKey] = useState(''),
    [projects, setProjects] = useState(data),
    [rows, setRows] = useState(3),
    [cols, setCols] = useState(2),
    [count, setCount] = useState();
  const topRef = useRef();

  // Checks whether or not all the projects are shown with the filter applied
  const showingAllProjects = () => !(projects.slice(0, count).length < projects.length);

  // Add more rows or return to default on button click
  const handleButtonClick = () => {
    if (!showingAllProjects()) setRows((prev) => prev + 2);
    else {
      setRows(3);
      setCount(cols * 3);
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update projects count whenever cols or rows changes
  useEffect(() => setCount(setProjectsCount(rows, cols)), [rows, cols]);

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

  // Sets count when the window is resized
  useEffect(() => {
    const resize = () => { setCount(setProjectsCount(rows, cols)); };
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('resize', resize); };
  }, []);

  return (
    <Container ref={topRef} className='row p-30-0' {...projectsMotion.container}>
      <SectionTitle title='Projects'>
        <ProjectsFilters filterKey={filterKey} setFilterKey={setFilterKey} />
      </SectionTitle>

      <Grid className={`art-grid art-grid-${cols}-col art-gallery`} {...projectsMotion.swiper}>
        {projects.slice(0, limit ? count : projects.length).map((project, index) => (
          <ProjectsCard key={`projects-grid-item-${index}`} index={index} hide={true} classes='art-grid-item' {...project} {...projectsMotion.card} />
        ))}
      </Grid>

      {limit && projects.length > count && (
        <Button className='art-buttons-frame acc' onClick={handleButtonClick}>
          View {!showingAllProjects() ? 'More' : 'Less'}
        </Button>
      )}
    </Container>
  );
};
export default SectionWrapper(ProjectsGrid, 'projects-grid');

const Container = styled(motion.div)`
  padding-top: 30px;
`;

const Grid = styled(motion.div)``;

const Button = styled(GradientButton)`
  text-align: center;
  display: flex;
  max-width: 200px;
  margin: 0 auto;
`;