import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { ProjectsFilters, SectionWrapper, SectionTitle, ProjectsCard } from '../..';
import { dataStore } from '../../../store/dataStore';
import { GradientButton } from '../../../styles';
import { buttonMotion, lowerCase, projectsMotion, getProjectsCount } from '../../../utils';

const ProjectsGrid = ({ limit }) => {
  const { projects, filteredProjects, setFilteredProjects, filterKey, rows, setRows, cols, setCols, count, setCount } = dataStore((state) => ({
    projects: state.projects.projects,
    filteredProjects: state.projects.filteredProjects,
    setFilteredProjects: state.projects.setFilteredProjects,
    filterKey: state.projects.filterKey,
    rows: state.projects.rows,
    setRows: state.projects.setRows,
    cols: state.projects.cols,
    setCols: state.projects.setCols,
    count: state.projects.count,
    setCount: state.projects.setCount,
  }));
  const topRef = useRef();

  // Set Filtered Projects
  useEffect(() => { setFilteredProjects(projects); }, []);

  // Checks whether or not all the projects are shown with the filter applied
  const showingAllProjects = () => !(filteredProjects.slice(0, count).length < projects.length);

  // Add more rows or return to default on button click
  const handleButtonClick = () => {
    if (!showingAllProjects()) setRows(rows + 2);
    else {
      setRows(3);
      setCount(cols * 3);
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update projects count whenever cols or rows changes (dont make it exceed the filtered projects length)
  useEffect(() => { filteredProjects.length && setCount(Math.min(getProjectsCount(rows, cols), filteredProjects.length)); }, [rows, cols]);

  // Handle filtering projects when filter key changes
  useEffect(() => {
    setFilteredProjects(
      [
        !filterKey
          ? projects
          : projects.filter((p) => lowerCase(p.categories.join('')).includes(filterKey) || lowerCase(p.tags.join('')).includes(filterKey)),
      ].flat()
    );
    // Update rows (if the new filtered projects are less than before, need to lower rows) (count will be updated whenever rows are updated)
    filteredProjects.length && setRows(Math.min(rows, Math.round(filteredProjects.length / cols)));
  }, [filterKey]);

  // Sets count when the window is resized
  useEffect(() => {
    const resize = () => { setCount(Math.min(getProjectsCount(rows, cols), filteredProjects.length || Infinity)); };
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('resize', resize); };
  }, []);

  return (
    <Container ref={topRef} className='row p-30-0' {...projectsMotion.container}>
      <SectionTitle title='Projects'>
        <ProjectsFilters />
      </SectionTitle>

      <Grid className={`art-grid art-grid-${cols}-col art-gallery`} {...projectsMotion.grid}>
        {Array.from(limit ? filteredProjects.slice(0, count) : filteredProjects)
          .flat()
          .map((project, index) => (
            <ProjectsCard
              key={`projects-grid-item-${project.title}`}
              index={index}
              hide={true}
              classes='art-grid-item'
              {...project}
              {...projectsMotion.card}
            />
          ))}
      </Grid>

      {limit && filteredProjects.length > getProjectsCount() && (
        <Button className='art-buttons-frame acc' onClick={handleButtonClick} {...buttonMotion.gradient}>
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
