import React from 'react';
import Code from './Code';
import { rng } from '../../assets/js/main.js';

export default function Banner({ data, background, changeBackground }) {
  return (
    <div className='container-fluid'>
      <div className='row p-60-0 p-lg-30-0 p-md-15-0'>
        <div className='col-lg-12'>
          {/* background image */}
          <div className='art-a art-banner' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + background})` }}>
            <div className='art-banner-back'></div>
            <div className='art-banner-dec'></div>
            <div className='art-banner-overlay'>
              <div className='art-banner-title'>
                {/* title */}
                <h1 className='mb-15'>
                  {data.heading.map((h) => (
                    <div key={h}>{h}</div>
                  ))}
                </h1>

                {/* typed text */}
                <Code typed={data.typed} />

                {/* button */}
                <div className='art-buttons-frame'>
                  {/* button v1 (an actual button) */}
                  {/* <a href={data.button.url} className='art-btn art-btn-md'>
                    <span>{data.button.text}</span>
                  </a> */}
                  {/* button v2 (a div with onclick) */}
                  <div className='art-btn art-btn-md btn-v2' onClick={() => changeBackground()}>
                    <span>{data.button.text}</span>
                  </div>
                </div>
              </div>
              {/* avatar */}
              <img src={process.env.PUBLIC_URL + data.avatar} className='art-banner-photo' alt='Banner Profile'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}