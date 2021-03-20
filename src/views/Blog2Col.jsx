import React from 'react';
import BlogGrid from '../components/Blog/BlogGrid';

export default function Blog2Col(props) {
  return <BlogGrid data={props.data} column={2} />;
}
