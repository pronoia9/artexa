import React from 'react';

export default function ProjectsFilter(props) {
  return (
    <div className={'art-link' + props.className} onClick={() => props.setCurrentFilter(props.filter.dataFilter)}>
      {props.filter.category}
    </div>
  );
}
