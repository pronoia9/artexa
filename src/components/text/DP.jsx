import React from 'react';

function P(props) {
  return (
    <div className={props.className}>
      <p>{props.text}</p>
    </div>
  );
}

export default P;
