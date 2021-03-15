import React from 'react';

export default function ProjectsFilter(props) {
  return (
    <a href={props.href} data-filter={props.dataFilter} className={'art-link' + props.className}>
      {props.category}
    </a>
  );
}
