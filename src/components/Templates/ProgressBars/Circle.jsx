import React, { useEffect } from 'react';
import { progressbarCircle } from '../../../assets/js/main.js';

export default function Circle(props) {
  // circle bar animation
  useEffect(() => progressbarCircle(props.i, props.id, props.percentage), [props.i, props.id, props.percentage]);

  // returns the text + animation
  return <div id={props.id} className={props.className}></div>;
}