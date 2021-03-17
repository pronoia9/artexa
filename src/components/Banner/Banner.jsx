import React from 'react';
import Code from './Code';

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
                  {props.data.heading.map((h) => (
                    <div key={h}>{h}</div>
                  ))}
                </h1>

                {/* typed text */}
                <Code typed={props.data.typed} />
                
                {/* button */}
                <div className='art-buttons-frame'>
                  {/* button v1 (an actual button) */}
                  {/* <a href={props.data.button.url} className='art-btn art-btn-md'>
                    <span>{props.data.button.text}</span>
                  </a> */}
                  {/* button v2 (a div with onclick) */}
                  <div
                    className='art-btn art-btn-md btn-v2'
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
                    <span>{props.data.button.text}</span>
                  </div>
                </div>
              </div>
              {/* avatar */}
              <img
                src={process.env.PUBLIC_URL + props.data.avatar}
                className='art-banner-photo'
                alt='Banner Profile'
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
