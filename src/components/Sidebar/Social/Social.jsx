import React from 'react';
import SocialIcon from './SocialIcon';

export default function Social(props) {
  return (
    <div className='art-ls-social'>
      {props.social.map((s) => (
        <SocialIcon key={s.id} platform={s.platform} url={(s.fancybox ? process.env.PUBLIC_URL: '') + s.url} favicon={s.favicon} fancybox={s.fancybox} />
      ))}
    </div>
  );
}
