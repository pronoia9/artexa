import React from 'react';
import animateLanguage from './animateLanguage.js';
import Circle from '../../../components/progressbars/Circle';

function Language(props) {
  return (
    <div className='art-lang-skills-item'>
      {/* circle bar animation */}
      <Circle
        id={'circleprog' + props.id}
        className='art-circle-progress'
        func={animateLanguage}
        i={props.id}
        language={props.language}
        level={props.level}
      />
      <h6>{props.language}</h6>
    </div>
  );
}

export default Language;
