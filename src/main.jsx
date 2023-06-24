import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </BrowserRouter>
);
