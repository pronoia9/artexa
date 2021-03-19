import React from 'react';
import Blog from '../components/Blog/BlogSwiper';

// TODO : change this page to 2 column (or 3 column), ie: finish BlogGrid.jsx

export default function BlogPage(props) {
  return <Blog data={props.data} />;
}
