import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function MenuBarHeader(props) {
  return (
    <div className='art-menu-bar-header'>
      {/* when clicked on it, add class art-active */}
      <a
        className={props.menuActive ? 'art-menu-bar-btn art-active' : 'art-menu-bar-btn'}
        onClick={() => props.setMenuActive(!props.menuActive)}
      >
        <span></span>
      </a>
    </div>
  );
}

export default MenuBarHeader;
