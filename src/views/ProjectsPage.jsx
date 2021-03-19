import React from 'react';
import ProjectsGrid from '../components/Projects/ProjectsGrid';

export default function ProjectsPage(props) {
  return <ProjectsGrid data={props.data} column={props.column} />;
}
