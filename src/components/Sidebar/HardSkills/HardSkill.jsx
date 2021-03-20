import React from 'react';
import Line from '../../Templates/ProgressBars/Line';

export default function HardSkill(props) {
  return (
    <div className='art-hard-skills-item'>
      {/* heading */}
      <div className='art-skill-heading'>
        <h6>{props.skill}</h6>
      </div>

      {/* progress bar (line) */}
      <Line
        key={props.id}
        i={props.id}
        id={'lineprog' + props.id}
        className='art-line-progress'
        text={props.language}
        percentage={props.level}
      />
    </div>
  );
}