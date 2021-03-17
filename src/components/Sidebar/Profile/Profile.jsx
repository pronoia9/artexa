import React from 'react';
import Avatar from './Avatar';
import Name from './Name';
import Post from './Post';

export default function Profile(props) {
  return (
    <div className='art-header'>
      <Avatar image={props.profile.avatar} available={props.profile.available} />
      <Name name={props.profile.name} />
      <Post subtitle={props.profile.subtitle} availability={props.profile.availability} />
    </div>
  );
}