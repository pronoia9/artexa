import React from 'react';
const url = require('../assets/images/tengyart-al1bUu7EfAQ-unsplash.jpg').default;

function ArtContent(props) {
  return (
    <div className={props.menuActive ? 'art-content active' : 'art-content'}>
      {/* curtain */}
      <div className='art-curtain' onClick={() => props.menuActive && props.setMenuActive(false)}></div>
      {/* curtain end */}

      {/* top background */}
      <div
        className='art-top-bg'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1615377730068-e8235046ff05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)',
        }}
      >
        {/* overlay */}
        <div className='art-top-bg-overlay'></div>
        {/* overlay end */}
      </div>
      {/* top background end */}

      {/* swup container */}
      <div></div>
      {/* swup container end */}
    </div>
  );
}

export default ArtContent;
