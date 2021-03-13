import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function MenuBarHeader(props) {
  return (
    <div className='art-menu-bar-header'>
      {/* when clicked on it, add class art-active and shows/hides the navbar */}
      <div
        className={props.navbarActive ? 'art-menu-bar-btn art-active' : 'art-menu-bar-btn'}
        onClick={() => props.setNavbarActive(!props.navbarActive)}
      >
        <span></span>
      </div>
    </div>
  );
}

export default MenuBarHeader;
