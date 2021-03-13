import React from 'react';

function H1(props) {
  return (
    <div className={props.className}>
      <h1>{props.text}</h1>
    </div>
  );
}

export default H1;
