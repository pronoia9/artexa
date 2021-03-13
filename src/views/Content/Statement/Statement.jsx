import React from 'react';
import Title from './Title';
import Subtitble from './Subtitle';
import Content from './Content';

function Statement(props) {
  const length = 'col-lg-' + props.length;
  return <div className={length}></div>;
}
