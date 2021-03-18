import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Preloader from './components/Preloader/Preloader';
// stylesheets
import './assets/css/colors/yellow.css';
import './assets/css/styles.css';

// fancybox
import './assets/css/fancybox.min.css';
// swiper
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <div className='art-app'>
        {/* separated sections to not have preloader on render once */}
        <App />
        <Preloader />
      </div>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
