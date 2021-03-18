import React from 'react';
import Banner from '../components/Banner/Banner';
import Counters from '../components/Counter/Counters';
import History from '../components/History/History';
import Projects from '../components/Projects/ProjectsSwiper';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';

export default function HomePage(props) {
  return (
    <>
      {/* heading for banner */}
      <Banner background={props.background} setBackground={props.setBackground} data={props.data.banner} />

      {/* counters */}
      <Counters data={props.data.counters} />

      {/* education history */}
      <History data={props.data.history} />

      {/* projects */}
      <Projects data={props.data.projects} />
      {/* <Test data={props.data.projects} /> */}

      {/* newsletter / posts */}
      <Blog data={props.data.blog} />

      {/* contact info */}
      <Contact data={props.data.contact} />
    </>
  );
}
