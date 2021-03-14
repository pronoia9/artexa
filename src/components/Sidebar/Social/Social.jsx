import React from 'react';
import SocialIcon from './SocialIcon';
import sidebar from '../../../data/sidebar.json';
import './social.css';

export default function Social() {
  return (
    <div className='art-ls-social'>
      {sidebar.social.map((s) => (
        <SocialIcon platform={s.platform} url={s.url} favicon={s.favicon} />
      ))}
    </div>
  );
}