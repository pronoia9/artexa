'use client';

import { useEffect, useState } from 'react';

import { Grid } from '@/components';
import { lowerCase, projectsMotion, projects as data } from '@/utils';

export const ProjectsGrid = (props) => {
  const { projects, filterKey } = data;
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
