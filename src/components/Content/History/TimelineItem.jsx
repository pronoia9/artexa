import React from 'react';

function TimelineItem(props) {
  return (
    <div className='art-timeline-item'>
      <div className='art-timeline-mark-light'></div>
      <div className='art-timeline-mark'></div>
      <div className='art-a art-timeline-content'>
        <div className='art-card-header'>
          <div className='art-left-side'>
            <h5>{props.title}</h5>
            <div className='art-el-suptitle mb-5'>{props.subtitle}</div>
          </div>
          <div className='art-right-side'>
            <span className='art-date'>{props.date}</span>
          </div>
        </div>
        <p>{props.content}</p>
        <a
          className='art-link art-color-link art-w-chevron'
          href={props.url}
          target='_blank'
          rel='noreferrer'
        >
          {props.link}
        </a>
      </div>
    </div>
  );
}

export default TimelineItem;
