import React from 'react';

function Post(props) {
  return <div className={props.class}>{props.text}</div>;
}

export default Post;
