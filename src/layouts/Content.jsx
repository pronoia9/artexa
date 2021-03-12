import React from 'react';

function ArtContent(props) {
  return <div className={props.menuActive ? 'art-content active' : 'art-content'}></div>;
}

export default ArtContent;
