import React from 'react';
import Avatar from './Avatar';
import Name from '../../../components/heading/mb-10';
import Post from '../../../components/paragraph/sm-text';

import './profile.css';

function Profile() {
  return (
    <div className='art-header'>
      <Avatar />
      <Name text='Lorem Ipsum' class='art-name mb-10' />
      <Post text='Curabitur quam dolor,' class='art-sm-text' />
      <Post text='Tristique iaculis congue non.' class='art-sm-text' />
    </div>
  );
}

export default Profile;
