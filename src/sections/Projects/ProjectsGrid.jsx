import { useEffect, useState } from 'react';

import { Grid } from '../../components';
import { dataStore } from '../../utils/dataStore';
import { lowerCase, projectsMotion } from '../../utils';

export const ProjectsGrid = (props) => {
  const { projects, filterKey } = dataStore((state) => ({
    projects: state.projects.projects,
    filterKey: state.projects.filterKey,
  }));
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Handle filtering projects when filter key changes
  useEffect(() => {
    setFilteredProjects(!filterKey ? projects : projects.filter((p) => lowerCase(p.tags.join('')).includes(filterKey)));
  }, [filterKey]);

  return (
    <Grid
      section='projects'
      data={filteredProjects}
      {...props}
      gridMotion={projectsMotion.grid}
      cardMotion={projectsMotion.card}
      buttonMotion={projectsMotion.button}
    />
  );
};
