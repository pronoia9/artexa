import React from 'react';

export default function SocialIcon(props) {
  return (
    <>
      {props.fancybox !== null ? (
        <a data-fancybox={props.fancybox} className={props.platform} href={props.url}>
          <i className={props.favicon}></i>
        </a>
      ) : (
        <a className={props.platform} href={props.url} target='_blank' rel='noopener noreferrer'>
          <i className={props.favicon}></i>
        </a>
      )}
    </>
  );
}
