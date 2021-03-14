import React from 'react';
import banner from '../../data/banner.json';
import Typed from 'react-typed';

function Code() {
  return (
    <div className='art-lg-text art-code mb-25'>
      &lt;<i>code</i>&gt; I{' '}
      <Typed
        loop
        typeSpeed={100}
        backSpeed={100}
        strings={banner.typed}
        smartBackspace
        shuffle={false}
        backDelay={1}
        fadeOut={false}
        fadeOutDelay={100}
        loopCount={0}
        showCursor
        cursorChar='|'
      />
      &lt;/<i>code</i>&gt;
    </div>
  );
}

export default Code;
