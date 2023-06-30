export const SwiperNavigation = (props) => (
  <div className='col-lg-12 p-0-30 acl'>
    <div className='art-slider-navigation'>
      {/* left side */}
      <div className='art-sn-left'>
        <div className={`swiper-pagination ${props.section}-swiper-pagination`} />
      </div>

      {/* right side */}
      <div className='art-sn-right'>
        <div className='art-slider-nav-frame'>
          <div className={`art-slider-nav art-${props.section}-swiper-prev`} role='button' aria-label='Previous slide'>
            <i className='fas fa-chevron-left' />
          </div>
          <div className={'art-slider-nav art-' + props.section + '-swiper-next'} role='button' aria-label='Next slide'>
            <i className='fas fa-chevron-right' />
          </div>
        </div>
      </div>
    </div>
  </div>
);