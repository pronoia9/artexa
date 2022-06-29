import React from 'react';

export default function TimelineItem({ item }) {
  const { id, title, subtitle, date, description, button, url } = item;
  
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
            <h5>{title}</h5>
            {/* status / author */}
            {subtitle && <div className='art-el-suptitle mb-15'>{subtitle}</div>}
          </div>
          {/* date */}
          {date && (
            <div className='art-right-side'>
              <div className='art-date'>{date}</div>
            </div>
          )}
        </div>

        {/* content */}
        <p>{description}</p>
        {/* <ul>
          {list.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul> */}

        {/* link */}
        {(button && url) && (
          url.includes('https') ? <a className='art-link art-color-link art-w-chevron' href={url} target='_blank' rel="noreferrer">{button}</a> :
          <a data-fancybox='history' className='art-link art-color-link art-w-chevron' href={process.env.PUBLIC_URL + url}>{button}</a>
        )}
      </div>
    </div>
  );
}