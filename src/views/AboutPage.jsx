import React from 'react';
import About from '../components/About/About';
import Hobbies from '../components/Hobbies/Hobbies';

export default function AboutPage(props) {
  return (
    <>
      <About background={props.background} />
      <Hobbies />
    </>
  );
}
