import React from 'react';
import About from '../components/About/About';

export default function AboutPage(props) {
  return <About background={props.background} hobbies={props.hobbies} />;
}
