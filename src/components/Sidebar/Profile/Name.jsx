import React from 'react';
import sidebar from '../../../data/sidebar.json';

export default function Name() {
  return (
    <h5 className='art-name mb-10'>
      <a href='/'>{sidebar.profile.name}</a>
    </h5>
  );
}