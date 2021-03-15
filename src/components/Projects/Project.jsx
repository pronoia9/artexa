import React from 'react';

export default function Project(props) {
  return (
    <div className={'art-grid-item ' + props.shape + ' ' + props.dataFilter}>
      {/* project image */}
      <a
        data-fancybox='gallery'
        href={props.href}
        className={'art-a art-portfolio-item-frame art-' + props.shape}
      >
        <img src={props.images[0]} alt='item'></img>
        <span className='art-item-hover'>
          <i className='fas fa-expand'></i>
        </span>
      </a>

      {/* project description */}
      <div className='art-item-description'>
        {/* title */}
        <h5 className='mb-15'>{props.title}</h5>
        {props.description !== '' && <div className='mb-15'>{props.overview}</div>}

        {/* link */}
        <a href='#.' className='art-link art-color-link art-w-chevron'>
          Read More
        </a>
      </div>
    </div>
  );
}
