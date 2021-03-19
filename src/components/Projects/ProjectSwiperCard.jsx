import React from 'react';

export default function ProjectCard(props) {
  return (
    <div class='art-grid-item art-project-swiper-card'>
      {/* project image */}
      <a
        data-fancybox='gallery'
        href={process.env.PUBLIC_URL + props.project.images[0]}
        class='art-a art-portfolio-item-frame art-square'
      >
        <img src={process.env.PUBLIC_URL + props.project.images[0]} alt='item' />
        <span class='art-item-hover'>
          <i class='fas fa-expand'></i>
        </span>
      </a>

      {/* project description */}
      <div class='art-item-description'>
        {/* title */}
        <h5 class='mb-15'>{props.project.title}</h5>
        {/* overview */}
        <div class='mb-15'>{props.project.overview}</div>
        {/* tags */}
        <div class='mb-15'>
          {props.project.tags.map((t) => (
            <p key={t} className='art-tag'>
              {t}
            </p>
          ))}
        </div>
        {/* link */}
        <a href={props.project.url} className='art-link art-color-link art-w-chevron'>
          Read More
        </a>
      </div>
    </div>
  );
}
