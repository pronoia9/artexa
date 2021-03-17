import React from 'react';
import sidebar from '../../../data/sidebar.json';

export default function Resume(props) {
  return (
    <div className='art-links-frame p-15-15'>
      <a href={process.env.PUBLIC_URL + props.resume.url} className='art-link art-color-link' download>
        {props.resume.text} <i className='fas fa-download'></i>
      </a>
    </div>
  );
}