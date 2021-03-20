import React from 'react';
import BlogGrid from '../components/Blog/BlogGrid';

export default function BlogPage(props) {
  return <BlogGrid data={props.data} column={props.column || 3} />;
}
