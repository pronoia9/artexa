import React from 'react';
import Education from '../components/History/Education.jsx';
import data from '../data/history.json';

export default function History() {
  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {data.education.map((e) => <Education key={e.id} type={e.type} history={e.history} /> )}
      </div>
    </div>
  );
}
