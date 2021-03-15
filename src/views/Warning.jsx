import React from 'react';

export default function Warning() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-6 col-lg-3'>
          <img
            className='art-brand'
            src={require('../assets/images/bitmoji/wear-your-mask.png').default}
            alt='warning'
          ></img>
        </div>
        <div className='col-6 col-lg-3'>
          <img
            className='art-brand'
            src={require('../assets/images/bitmoji/wash-your-hands.png').default}
            alt='warning'
          ></img>
        </div>
        <div className='col-6 col-lg-3'>
          <img
            className='art-brand'
            src={require('../assets/images/bitmoji/sanitize.png').default}
            alt='warning'
          ></img>
        </div>
        <div className='col-6 col-lg-3'>
          <img
            className='art-brand'
            src={require('../assets/images/bitmoji/dont-touch-your-face.png').default}
            alt='warning'
          ></img>
        </div>
      </div>
    </div>
  );
}
