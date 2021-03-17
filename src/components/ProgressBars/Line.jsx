import React, { useEffect } from 'react';
import { progressbarLine } from '../../assets/js/main.js';

export default function Line(props) {
  // line bar animation
  useEffect(() => progressbarLine(props.i, props.id, props.percentage), [props.i, props.id, props.percentage]);

  // returns the text + animation
  return (
    <div className={props.className}>
      <div id={props.id} className={props.id}></div>
    </div>
  );
}