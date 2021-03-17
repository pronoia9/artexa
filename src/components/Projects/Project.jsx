import React from 'react';

export default function Project(props) {
  return (
    <div className={'art-grid-item ' + props.dataFilter}>
      {/* project image */}
      <a
        data-fancybox='gallery'
        href={process.env.PUBLIC_URL + props.images[0]}
        className={'art-a art-portfolio-item-frame art-' + props.shape}
      >
        <img src={process.env.PUBLIC_URL + props.images[0]} alt='item'></img>
        <span className='art-item-hover'>
          <i className='fas fa-expand'></i>
        </span>
      </a>

      {/* project description */}
      <div className='art-item-description'>
        {/* title */}
        <h5 className='mb-15'>{props.title}</h5>
        <div className='mb-15'>
          {/* {props.overview} */}
          {props.tags.map((t) => (
            <p className='art-tag'>{t}</p>
          ))}
        </div>

        {/* link */}
        <a href={props.url} className='art-link art-color-link art-w-chevron'>
          Read More
        </a>
      </div>
    </div>
  );
}
