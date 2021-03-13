import React from 'react';
import SocialIcon from './SocialIcon';
import data from '../../../data/data.json';
import './social.css';

function Social() {
  return (
    <div className='art-ls-social'>
      {data.social.map((s) => (
        <SocialIcon platform={s.platform} url={s.url} favicon={s.favicon} />
      ))}
    </div>
  );
}

export default Social;
