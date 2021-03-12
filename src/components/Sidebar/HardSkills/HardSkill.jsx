import React, { useEffect } from 'react';
import animateHardSkill from './animateHardSkill.js';

function HardSkill(props) {
  // line bar animation
  useEffect(() => animateHardSkill(props.id, props.skill, props.level));
  
  return (
    <div className='art-hard-skills-item'>
      <div className='art-skill-heading'>
        <h6>{props.skill}</h6>
      </div>
      <div className='art-line-progress'>
        <div id={'lineprog' + props.id} className={'lineprog' + props.id}></div>
      </div>
    </div>
  );
}

export default HardSkill;
