import React from 'react';

function Button(props) {
  return (
    <a href={props.link} className={props.className} target={props.target}>
      <span>{props.text}</span>
    </a>
  );
}

export default Button;
