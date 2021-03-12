import React from 'react';
import './social.css';

function Social() {
  return (
    <div className='art-ls-social'>
      <a className='GitHub' href='https://github.com/pronoia9' target='_blank'>
        <i class='fab fa-github-square'></i>
      </a>
      <a className='LinkedIn' href='https://www.linkedin.com/in/jayansin/' target='_blank'>
        <i class='fab fa-linkedin'></i>
      </a>
      <a className='Facebook'>
        <i class='fab fa-facebook-square'></i>
      </a>
      <a className='Twitter'>
        <i class='fab fa-twitter-square'></i>
      </a>
      <a className='Discord'>
        <i class='fab fa-discord'></i>
      </a>
    </div>
  );
}

export default Social;
