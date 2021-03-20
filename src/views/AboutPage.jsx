import React, { useEffect } from 'react';
import About from '../components/About/About';
// transition
import { transition } from '../assets/js/main.js';

export default function AboutPage(props) {
  useEffect(transition, []);

  return <About background={props.background} />;
}
