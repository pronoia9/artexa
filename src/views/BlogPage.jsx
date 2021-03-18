import React, { useEffect } from 'react';
import Blog from '../components/Blog/BlogSwiper';
// animation function
import { transition } from '../assets/js/main.js';

// TODO : change this page to 2 column (or 3 column)

export default function BlogPage(props) {
  // body section transition (soft fade in)
  useEffect(transition, []);

  return <Blog data={props.data} />;
}
