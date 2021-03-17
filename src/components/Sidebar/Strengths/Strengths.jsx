import React from 'react';

export default function Strengths(props) {
  console.log(props.data);
  return (
    <div className='art-strengths p-15-0'>
      {props.data.map((strength) => (
        <p>{strength}</p>
      ))}
    </div>
  );
}
