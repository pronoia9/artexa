import React, { useEffect } from 'react';
import { progressbarCircle } from './progressbar.js';

export default function Circle(props) {
  // circle bar animation
  useEffect(() => progressbarCircle(props.i, props.id, props.text, props.percentage), []);

  // returns the text + animation
  return <div id={props.id} className={props.className}></div>;
}