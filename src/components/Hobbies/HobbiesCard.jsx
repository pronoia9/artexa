import React from 'react';

export default function HobbiesCard(props) {
  return (
    <div className={'art-a art-' + props.section + '-item-frame'}>
      <a
        data-fancybox='hobbies'
        href={process.env.PUBLIC_URL + props.fancybox}
        className={'art-a art-' + props.section + '-item-frame art-horizontal'}
      >
        <img src={process.env.PUBLIC_URL + props.image} alt={props.title} />

        <span className='art-item-hover'>
          <i className='fas fa-expand'></i>
        </span>
      </a>
    </div>
  );
}
