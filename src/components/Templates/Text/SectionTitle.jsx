import React from 'react';

export default function SectionTitle(props) {
  return (
    <div className={'col-lg-' + (12 / props.column || 12)}>
      <div className='art-section-title'>
        <div className='art-title-frame'>
          <h4>{props.title}</h4>
        </div>

        {props.rightTitle && (
          <div className='art-right-frame'>
            <div className={props.rightClass}>{props.rightTitle}</div>
          </div>
        )}
      </div>
    </div>
  );
}
