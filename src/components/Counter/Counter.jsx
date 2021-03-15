import React from 'react';
//import counterAnimation from './counterAnimation.js';
import CountUp from 'react-countup';

export default function Counter(props) {
  // animation (fade-in & count increase)
  //useEffect(counterAnimation, []);

  return (
    <div className={'col-md-' + (12 / props.length).toString() + ' col-6'}>
      <div className='art-counter-frame'>
        <div className='art-counter-box'>
          <span id={'art-counter-' + props.id} className='art-counter'>
            <CountUp end={props.number} duration={5} delay={2.5} />
          </span>
        </div>
        <h6>{props.text}</h6>
      </div>
    </div>
  );
}
