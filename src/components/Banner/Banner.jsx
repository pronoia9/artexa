import React from 'react';
import Code from './Code';
import banner from '../../data/banner.json';
import './banner.css';
const pfp = require('../../assets/images/bitmoji/side-wave.png').default;

// TODO: get a png to use as a banner profile image

function Banner(props) {
  return (
    <div className='container-fluid'>
      <div className='row p-60-0 p-lg-30-0 p-md-15-0'>
        <div className='col-lg-12'>
          {/* background image */}
          <div className='art-a art-banner' style={{ backgroundImage: 'url(' + props.background + ')' }}>
            <div className='art-banner-back'></div>
            <div className='art-banner-dec'></div>
            <div className='art-banner-overlay'>
              <div className='art-banner-title'>
                {/* title */}
                <h1 className='mb-15'>
                  {banner.heading.map((h) => (
                    <div>{h}</div>
                  ))}
                </h1>
                {/* typed text */}
                <Code />
                <div className='art-button-frame'>
                  {/* button */}
                  {/* <a href={banner.button.url} className='art-btn art-btn-md'>
                    <span>{banner.button.text}</span>
                  </a> */}
                  <div
                    className='art-btn art-btn-md'
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      props.setBackground(
                        banner.backgrounds.dropbox[
                          Math.round(Math.random() * banner.backgrounds.dropbox.length)
                        ]
                      )
                    }
                  >
                    <span>{banner.button.text}</span>
                  </div>
                </div>
              </div>
              {/* avatar */}
              <img src={pfp} class='art-banner-photo' alt='Banner Profile'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
