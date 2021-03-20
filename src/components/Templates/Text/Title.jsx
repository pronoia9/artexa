import React from 'react';

export default function Title(props) {
  return (
    <div class='art-section-title'>
      <div class='art-title-frame'>
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}
