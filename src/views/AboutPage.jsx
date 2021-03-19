import React from 'react';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';

export default function AboutPage(props) {
  return (
    <>
      {/* heading for banner */}
      <Banner background={props.background} setBackground={props.setBackground} data={props.data.banner} />

      {/* personal statement */}
      <About background={props.background} />
    </>
  );
}
