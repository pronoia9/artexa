import React from 'react';
import Code from './Code';
import banner from '../../data/banner.json';
const pfp = require('../../assets/images/bitmoji/side-wave.png').default;

// TODO: get a png to use as a banner profile image

export default function Banner(props) {
  return (
    <div className='container-fluid'>
      <div className='row p-60-0 p-lg-30-0 p-md-15-0'>
        <div className='col-lg-12'>
          {/* background image */}
          <div
            className='art-a art-banner'
            //style={{ backgroundImage: 'url(' + props.background.current + ')' }}
            style={{
              backgroundImage: 'url(' + process.env.PUBLIC_URL + props.background.current + ')',
            }}
          >
            <div className='art-banner-back'></div>
            <div className='art-banner-dec'></div>
            <div className='art-banner-overlay'>
              <div className='art-banner-title'>
                {/* title */}
                <h1 className='mb-15'>
                  {banner.heading.map((h) => (
                    <div key={h}>{h}</div>
                  ))}
                </h1>
                {/* typed text */}
                <Code />
                <div className='art-buttons-frame'>
                  {/* button */}
                  {/* <a href={banner.button.url} className='art-btn art-btn-md'>
                    <span>{banner.button.text}</span>
                  </a> */}
                  <div
                    className='art-btn art-btn-md'
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      // to not get the same image, compare it to the index
                      // if they are the same, randomize it again until its not the same
                      let i;
                      do {
                        i = Math.floor(Math.random() * props.background.total);
                      } while (i === props.background.index);
                      // change background after the new image index is different
                      props.setBackground({
                        ...props.background,
                        current: props.background.all[i],
                        index: i,
                      });
                    }}
                  >
                    <span>Beam Me Up Scotty</span>
                  </div>
                </div>
              </div>
              {/* avatar */}
              <img src={pfp} className='art-banner-photo' alt='Banner Profile'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
