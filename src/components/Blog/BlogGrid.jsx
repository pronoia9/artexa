import React from 'react';
import BlogCard from './BlogCard';

export default function BlogGrid(props) {
  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {/* heading */}
        <div className='col-lg-12'>
          <div className='art-section-title'>
            <div className='art-title-frame'>
              <h4>{props.data.title}</h4>
            </div>
          </div>
        </div>

        {/* content */}
        {props.data.posts.map((item) => (
          <div className={'col-lg-' + 12 / props.column}>
            <BlogCard key={item.id} post={item} message={props.data.message} />
          </div>
        ))}
      </div>
    </div>
  );
}
