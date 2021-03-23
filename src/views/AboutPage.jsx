import React from 'react';
import About from '../components/About/About';

export default function AboutPage(props) {
  return <About hobbies={props.hobbies} />;
}
