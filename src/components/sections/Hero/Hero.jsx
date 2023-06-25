import { SectionWrapper } from '../..';

const Hero = () => {
  return (
    <div className='container-fluid'>
      <div className='row p-60-0 p-lg-30-0 p-md-15-0'>
        <div className='col-lg-12'>
          {/* background image */}
          <div className='art-a art-banner' style={{ backgroundImage: `url()` }}>
            <div className='art-banner-back'></div>
            <div className='art-banner-dec'></div>
            <div className='art-banner-overlay'>
              <div className='art-banner-title'>
                {/* title */}
                <h1 className='mb-15'>
                  {/* {data.heading.map((h) => (
                    <div key={h}>{h}</div>
                  ))} */}
                  HEADING
                </h1>

                {/* typed text */}
                {/* <Code typed={data.typed} /> */}

                {/* button */}
                <div className='art-buttons-frame'>
                  {/* button v1 (an actual button) */}
                  {/* <a href={data.button.url} className='art-btn art-btn-md'>
                    <span>{data.button.text}</span>
                  </a> */}
                  {/* button v2 (a div with onclick) */}
                  <div className='art-btn art-btn-md btn-v2' onClick={() => 'changeBackground()'}>
                    <span>{`data.button.text`}</span>
                  </div>
                </div>
              </div>
              {/* avatar */}
              <img src='' className='art-banner-photo' alt='Banner Profile' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper(Hero, 'hero');
