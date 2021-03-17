import React from 'react';
import Logo from './Logo';

export default function Logos(props) {
  return (
    <div className='container-fluid'>
      <div className='row'>
        {props.data.map((logo) => (
          <Logo key={logo} url={logo} />
        ))}
      </div>
    </div>
  );
}
