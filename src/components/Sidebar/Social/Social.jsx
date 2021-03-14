import React from 'react';
import SocialIcon from './SocialIcon';
import sidebar from '../../../data/sidebar.json';

export default function Social() {
  return (
    <div className='art-ls-social'>
      {sidebar.social.map((s) => (
        <SocialIcon key={s.id} platform={s.platform} url={s.url} favicon={s.favicon} />
      ))}
    </div>
  );
}