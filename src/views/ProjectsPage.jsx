import React, { useEffect } from 'react';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
// animation function
import { transition } from '../assets/js/main.js';

export default function ProjectsPage(props) {
  // body section transition (soft fade in)
  //useEffect(transition, []);

  return <ProjectsGrid data={props.data} column={props.column} />;
}
