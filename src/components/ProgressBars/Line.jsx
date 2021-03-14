import React, { useEffect } from 'react';
import { progressbarLine } from './progressbar.js';

export default function Line(props) {
  // line bar animation
  useEffect(() => progressbarLine(props.i, props.id, props.text, props.percentage), []);

  // returns the text + animation
  return (
    <div className={props.className}>
      <div id={props.id} className={props.id}></div>
    </div>
  );
}