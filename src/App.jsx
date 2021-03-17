import React from 'react';
import Preloader from './components/Preloader/Preloader';
import Wrapper from './Wrapper';
// fancybox
import './assets/css/fancybox.min.css';
// swiper
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// stylesheets
import './assets/css/colors/yellow.css';
import './assets/css/styles.css';

export default function App() {
  return (
    <div className='art-app'>
      {/* separated sections to not have preloader render every time theres an update */}
      <Wrapper />
      <Preloader />
    </div>
  );
}
