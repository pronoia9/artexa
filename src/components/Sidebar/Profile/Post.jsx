import React from 'react';
import sidebar from '../../../data/sidebar.json';

function Post() {
  return (
    <div className='art-sm-text'>
      {sidebar.profile.subtitle.map((s) => s)}
      <br />
      Full-Stack Developer,
      <br />
      Lorem ipsum{' '}
      <span>
        <i className='fas fa-paw'></i>
      </span>
    </div>
  );
}

export default Post;
