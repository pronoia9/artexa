import React from 'react';

function SocialIcon(props) {
  return (
    <a className={props.platform} href={props.url} target='_blank'>
      <i className={props.favicon}></i>
    </a>
  );
}

export default SocialIcon;
