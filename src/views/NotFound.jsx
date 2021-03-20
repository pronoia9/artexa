import React, { useEffect } from 'react';
// transition
import { transition } from '../assets/js/main.js';

export default function NotFound() {
  useEffect(transition, []);

  return <div className='container-fluid'></div>;
}
