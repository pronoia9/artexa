import React, { useEffect } from 'react';
import Counter from './Counter';
import { counterAnimation } from '../../assets/js/main.js';

export default function Counters({ data, projectsCount }) {
  console.log(projectsCount);
  // animation (fade-in & count increase)
  useEffect(counterAnimation, []);

  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {data.map((c) => (
          <Counter key={c.id} id={c.id} length={data.length} number={c.text === 'Completed Projects' ? projectsCount : c.text === 'Years Experience' ? (new Date().getFullYear() -  c.number + 1) : c.number} text={c.text} />
        ))}
      </div>
    </div>
  );
}