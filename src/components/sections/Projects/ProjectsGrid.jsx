import { useEffect } from 'react';

import { Grid } from '../..';
import { dataStore } from '../../../store/dataStore';
import { lowerCase, projectsMotion } from '../../../utils';

export const ProjectsGrid = (props) => {
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

  // Set Filtered Projects
  useEffect(() => { setFilteredProjects(projects); }, []);

  // Handle filtering projects when filter key changes
  useEffect(() => {
    setFilteredProjects(
      [!filterKey
        ? projects
        : projects.filter((p) => lowerCase(p.categories.join('')).includes(filterKey) || lowerCase(p.tags.join('')).includes(filterKey)),
      ].flat()
    );
    // Update rows (if the new filtered projects are less than before, need to lower rows) (count will be updated whenever rows are updated)
    filteredProjects.length && setRows(Math.min(rows, Math.round(filteredProjects.length / cols)));
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
