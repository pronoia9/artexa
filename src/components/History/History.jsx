import React from 'react';
import Timeline from '../Timeline/Timeline';

export default function History(props) {
  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {props.data.map((col) => <Timeline key={col.id} column={2} title={col.title} list={col.timeline} /> )}
      </div>
    </div>
  );
}
