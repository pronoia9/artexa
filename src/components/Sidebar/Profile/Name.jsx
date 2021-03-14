import React from 'react';
import sidebar from '../../../data/sidebar.json';

function Name() {
  return (
    <h5 className='art-name mb-10'>
      <a href='/'>{sidebar.profile.name}</a>
    </h5>
  );
}

export default Name;
