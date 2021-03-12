import React from 'react';
import Title from './Title';
import Text from './Text';
import Button from './Button';
import './banner.css'

// TODO: get a png to use as a banner profile image

function Banner() {
  return (
    <div className='container-fluid'>
      <div className='row p-60-0 p-lg-30-0 p-md-15-0'>
        <div className='col-lg-12'>
          <div className='art-a art-banner'>
            <div className='art-banner-back'></div>
            <div className='art-banner-dec'></div>
            <div className='art-banner-overlay'>
              <div className='art-banner-title'>
                <Title />
                <Text />
                <Button />
              </div>
              {/* <img src='' class='art-banner-photo' alt='Banner Profile'></img> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
