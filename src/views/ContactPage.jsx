import React, { useEffect } from 'react';
import Contact from '../components/Contact/Contact';
// animation function
import { transition } from '../assets/js/main.js';

export default function ContactPage(props) {
  // body section transition (soft fade in)
  useEffect(transition, []);

  return <Contact data={props.data} />;
}
