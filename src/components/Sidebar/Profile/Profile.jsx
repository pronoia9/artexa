import React from 'react';
import Avatar from './Avatar';
import Name from './Name';
import Post from './Post';
import './profile.css';

function Profile() {
  return (
    <div className='art-header'>
      <Avatar />
      <Name />
      <Post />
    </div>
  );
}

export default Profile;
