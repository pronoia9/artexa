import React from 'react';
import BlogGrid from '../components/Blog/BlogGrid';

// TODO : change this page to 2 column (or 3 column), ie: finish BlogGrid.jsx

export default function BlogPage(props) {
  return <BlogGrid data={props.data} column={props.column || 2} />;
}
