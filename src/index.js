import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Preloader from './components/Preloader/Preloader';
// swiper
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// stylesheets
import './assets/css/colors/yellow.css';
import './assets/css/styles.css';

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
      <Preloader />
    </BrowserRouter>,
  document.getElementById('root')
);