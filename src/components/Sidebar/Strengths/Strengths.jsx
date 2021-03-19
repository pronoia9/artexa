import React from 'react';

export default function Strengths(props) {
  return (
    <div className='art-strengths p-15-15'>
      {props.data.map((strength) => (
        <p key={strength}>{strength}</p>
      ))}
    </div>
  );
}
