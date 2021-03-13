import React from 'react';
import data from '../../../data/data.json';
import './resume.css';

// TODO: Add resume and replace the placeholder

function Resume() {
  return (
    <div className='art-links-frame p-15-15'>
      <a href={data.resume} className='art-link' download>
        Download Resume <i className='fas fa-download'></i>
      </a>
    </div>
  );
}

export default Resume;
