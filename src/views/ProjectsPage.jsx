import React from 'react';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import ProjectsSwiper from '../components/Projects/ProjectsSwiper';

export default function ProjectsPage(props) {
  if (props.column) {
    return <ProjectsGrid data={props.data} column={props.column} />;
  }
  return <ProjectsSwiper data={props.data} />;
}
