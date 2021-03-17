import React, { useEffect } from 'react';
import Counter from './Counter';
import { counterAnimation } from '../../assets/js/main.js';

export default function Counters(props) {
  // animation (fade-in & count increase)
  useEffect(counterAnimation, []);

  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {props.data.map((c) => (
          <Counter key={c.id} id={c.id} length={props.data.length} number={c.number} text={c.text} />
        ))}
      </div>
    </div>
  );
}
