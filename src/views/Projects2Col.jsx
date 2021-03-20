import React, { useState, useEffect } from 'react';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
// transition
import { transition } from '../assets/js/main.js';

export default function Projects2Col(props) {
  useEffect(transition, []);

  // state for storing the filter keyword, with an initial value of null, which means no filter is applied
  const [currentFilter, setCurrentFilter] = useState(null);

  return (
    <ProjectsGrid
      data={props.data}
      column={2}
      currentFilter={currentFilter}
      setCurrentFilter={setCurrentFilter}
    />
  );
}
