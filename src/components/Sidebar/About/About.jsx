import React from 'react';
import ListItem from './ListItem';
import sidebar from '../../../data/sidebar.json';

export default function About() {
  return (
    <div className='art-table p-15-15'>
      <ul>
        {sidebar.about.map((li) => (
          <ListItem title={li.title} subtitle={li.subtitle} />
        ))}
      </ul>
    </div>
  );
}