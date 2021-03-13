import React from 'react';
import ListItem from './ListItem';
import data from '../../../data/data.json';

function About() {
  return (
    <div className='art-table p-15-15'>
      <ul>
        {data.about.map((li) => (
          <ListItem title={li.title} subtitle={li.subtitle} />
        ))}
      </ul>
    </div>
  );
}

export default About;
