import React from 'react';

export default function BlogCard(props) {
  return (
    <div className='art-a art-blog-card'>
      {/* post cover */}
      <a href='/' className='art-port-cover'><img src={props.image} alt='post' /></a>

      {/* post description */}
      <div className='art-post-description'>
        {/* title */}
        <a href='/'>
          <h5 className='mb-15'>{props.title}</h5>
        </a>
        {/* text */}
        <div className='mb-15'>{props.overview}</div>
        {/* link */}
        <a href='/' className='art-link art-color-link art-w-chevron'>Read More</a>
      </div>
    </div>
  );
}
