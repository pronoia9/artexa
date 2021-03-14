import React from 'react';

export default function Link(props) {
  return (
    <a href={props.link} className={props.className} target={props.target}>
      <span>{props.text}</span>
    </a>
  );
}