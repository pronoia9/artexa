import React, { useEffect } from 'react';
import animateLanguage from './animateLanguage.js';

function Language(props) {
  // circle bar animation
  useEffect(() => animateLanguage(props.id, props.language, props.level));

  return (
    <div className='art-lang-skills-item'>
      <div id={'circleprog' + props.id} className='art-circle-progress'></div>
      <h6>{props.language}</h6>
    </div>
  );
}

export default Language;
