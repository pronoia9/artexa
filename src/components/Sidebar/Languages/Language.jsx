import React from 'react';
import Circle from '../../Templates/ProgressBars/Circle';

export default function Language(props) {
  return (
    <div className='art-lang-skills-item'>
      <Circle
        key={props.id}
        i={props.id}
        id={'circleprog' + props.id}
        className='art-circle-progress'
        text={props.language}
        percentage={props.level}
      />
      <h6>{props.language}</h6>
    </div>
  );
}