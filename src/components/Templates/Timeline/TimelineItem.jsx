import React from 'react';

export default function TimelineItem(props) {
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
            <h5>{props.item.title}</h5>
            {/* status / author */}
            <div className='art-el-suptitle mb-15'>{props.item.subtitle}</div>
          </div>
          {/* date */}
          <div className='art-right-side'>
            <div className='art-date'>{props.item.date}</div>
          </div>
        </div>

        {/* content */}
        <p>{props.item.description}</p>
        {/* <ul>
          {props.item.list.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul> */}

        {/* link */}
        {props.item.url && (
          <a data-fancybox='history' className='art-link art-color-link art-w-chevron' href={process.env.PUBLIC_URL + props.item.url}>
            {props.item.button}
          </a>
        )}
      </div>
    </div>
  );
}
