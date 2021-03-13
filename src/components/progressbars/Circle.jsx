import React, {useEffect} from 'react';

function Circle(props) {
  useEffect(() => props.func(props.i, props.language, props.level));
  return <div id={props.id} className={props.className}></div>;
}

export default Circle;
