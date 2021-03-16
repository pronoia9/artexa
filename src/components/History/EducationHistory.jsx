import React from 'react';

export default function EducationHistory(props) {
  return (
    <div className='art-timeline-item'>
      {/* decoration, the circle lights next to the item */}
      <div className='art-timeline-mark-light'></div>
      <div className='art-timeline-mark'></div>

      {/* item */}
      <div className='art-a art-timeline-content'>
        {/* header */}
        <div className='art-card-header'>
          <div className='art-left-side'>
            {/* title */}
            <h5>{props.title}</h5>
            {/* status / author */}
            <div className='art-el-suptitle mb-15'>{props.subtitle}</div>
          </div>
          {/* date */}
          <div className='art-right-side'>
            <div className='art-date'>{props.date}</div>
          </div>
        </div>

        {/* content */}
        <p>{props.content}</p>

        {/* link */}
        <a data-fancybox={props.link} className='art-link art-color-link art-w-chevron' href={props.url}>{props.link}</a>
      </div>
    </div>
  );
}
