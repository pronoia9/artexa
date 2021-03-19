import React, { useState } from 'react';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import ProjectsSwiper from '../components/Projects/ProjectsSwiper';

export default function ProjectsPage(props) {
  // state for storing the filter keyword, with an initial value of null, which means no filter is applied
  const [currentFilter, setCurrentFilter] = useState(null);

  if (props.column) {
    return (
      <ProjectsGrid
        data={props.data}
        column={props.column}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
    );
  }
  return (
    <ProjectsSwiper data={props.data} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
  );
}
