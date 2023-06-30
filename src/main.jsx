import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
// import 'swiper/css/controller';
// import 'swiper/css/effect-cards';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/effect-creative';
// import 'swiper/css/effect-cube';
// import 'swiper/css/effect-fade';
// import 'swiper/css/effect-flip';
// import 'swiper/css/free-mode';
// import 'swiper/css/grid';
import 'swiper/css/history';
import 'swiper/css/keyboard';
import 'swiper/css/manipulation';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/parallax';
import 'swiper/css/scrollbar';
// import 'swiper/css/thumbs';
// import 'swiper/css/virtual';
// import 'swiper/css/zoom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
