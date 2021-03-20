import React from 'react';
import BlogGrid from '../components/Blog/BlogGrid';

// DEPRECATED
// NOT RELEVANT SINCE BLOG PAGES HAD TO BE SEPARATED TO GET ANIME TRANSITION WORK

export default function BlogPage(props) {
  return <BlogGrid data={props.data} column={props.column || 2} />;
}
