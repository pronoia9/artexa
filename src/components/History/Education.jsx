import React from 'react';
import EducationHistory from './EducationHistory';

export default function Education(props) {
  return (
    // half screen panel
    <div className='col-lg-6'>
      {/* title */}
      <div className='art-section-title'>
        <div className='art-title-frame'>
          <h4>{props.type}</h4>
        </div>
      </div>

      {/* items container */}
      <div className='art-timeline art-gallery'>
        {props.history.map((h) => (
          <EducationHistory
            key={h.id}
            title={h.title}
            subtitle={h.subtitle}
            date={h.date}
            content={h.content}
            link={h.link}
            url={h.url}
          />
        ))}
      </div>
    </div>
  );
}
