import React from 'react';
import ListItem from './ListItem';

export default function About(props) {
  return (
    <div className='art-table p-15-15'>
      <ul>
        {props.about.map((li) => (
          <ListItem key={li.id} title={li.title} subtitle={li.subtitle} />
        ))}
      </ul>
    </div>
  );
}
