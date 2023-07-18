import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import App from './App.jsx';
import { AboutPage, ContactPage, CoursePage, HistoryPage, HomePage, NotFound, ProjectsPage, ProjectPage, TechnologiesPage } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/:projectId', element: <ProjectPage /> },
      { path: 'history', element: <HistoryPage /> },
      { path: 'courses', element: <CoursePage /> },
      { path: 'technologies', element: <TechnologiesPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
