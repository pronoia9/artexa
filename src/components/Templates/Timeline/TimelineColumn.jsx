import React from 'react';
import TimelineItem from './TimelineItem';
import Title from '../Text/Title';

export default function TimelineColumn(props) {
  return (
    // half screen panel
    <div className={'col-lg-' + 12 / props.column}>
      {/* title */}
      <Title title={props.title} />

      {/* items container */}
      <div className='art-timeline art-gallery'>
        {props.list.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
