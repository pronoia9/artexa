import React from 'react';
import Education from './HistoryColumn';

export default function History(props) {
  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {props.data.education.map((e) => <Education key={e.id} type={e.type} history={e.history} /> )}
      </div>
    </div>
  );
}
