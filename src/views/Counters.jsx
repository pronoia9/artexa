import React, { useEffect } from 'react';
import counterAnimation from '../components/Counter/counterAnimation.js';
import Counter from '../components/Counter/Counter.jsx';
import data from '../data/counter.json';

// TODO : fix the anime fade in entrance

export default function Counters() {
  // animation (fade-in & count increase)
  useEffect(counterAnimation, []);

  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {data.counters.map((c) => (
          <Counter key={c.id} id={c.id} length={data.counters.length} number={c.number} text={c.text} />
        ))}
      </div>
    </div>
  );
}
