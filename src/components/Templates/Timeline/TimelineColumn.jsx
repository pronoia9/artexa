import React from 'react';
import TimelineItem from './TimelineItem';

export default function TimelineColumn(props) {
  return (
    // half screen panel
    <div className={'col-lg-' + 12 / props.column}>
      {/* title */}
      <div className='art-section-title'>
        <div className='art-title-frame'>
          <h4>{props.title}</h4>
        </div>
      </div>

      {/* items container */}
      <div className='art-timeline art-gallery'>
        {props.list.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
