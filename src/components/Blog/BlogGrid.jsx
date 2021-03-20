import React from 'react';
import BlogCard from './BlogCard';
import SectionTitle from '../Templates/Text/SectionTitle';

export default function BlogGrid(props) {
  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {/* heading */}
        <SectionTitle title={props.data.title} />

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
