import React from 'react';

export default function SwiperNavigation(props) {
  return (
    <div className='col-lg-12 p-0-30'>
      <div className='art-slider-navigation'>
        {/* left side */}
        <div className='art-sn-left'>
          {/* slider pagination */}
          <div className={props.section + '-swiper-pagination'}></div>
        </div>

        {/* right side */}
        <div className='art-sn-right'>
          {/* slider navigation */}
          <div className='art-slider-nav-frame'>
            {/* prev */}
            <div
              className={'art-slider-nav art-' + props.section + '-swiper-prev'}
              role='button'
              aria-label='Previous slide'
            >
              <i className='fas fa-chevron-left'></i>
            </div>
            {/* next */}
            <div
              className={'art-slider-nav art-' + props.section + '-swiper-next'}
              role='button'
              aria-label='Next slide'
            >
              <i className='fas fa-chevron-right'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
