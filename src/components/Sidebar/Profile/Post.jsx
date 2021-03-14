import React from 'react';
import sidebar from '../../../data/sidebar.json';

function Post() {
  return (
    <div className='art-sm-text'>
      {sidebar.profile.subtitle.map((s) => <div>{s}</div>)}
    </div>
  );
}

export default Post;
