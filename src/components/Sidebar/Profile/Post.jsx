import React from 'react';
import sidebar from '../../../data/sidebar.json';

export default function Post() {
  return (
    <div className='art-sm-text'>
      {sidebar.profile.subtitle.map((s) => (
        <div>{s}</div>
      ))}
    </div>
  );
}