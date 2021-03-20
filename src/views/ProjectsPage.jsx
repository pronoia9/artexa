import React, { useState } from 'react';
import ProjectsGrid from '../components/Projects/ProjectsGrid';

export default function ProjectsPage(props) {
  // state for storing the filter keyword, with an initial value of null, which means no filter is applied
  const [currentFilter, setCurrentFilter] = useState(null);

  return (
    <ProjectsGrid
      data={props.data}
      column={props.column || 3}
      currentFilter={currentFilter}
      setCurrentFilter={setCurrentFilter}
    />
  );
}
