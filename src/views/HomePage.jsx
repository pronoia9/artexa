import React from 'react';
import Banner from '../components/Banner/Banner';
import Counters from '../components/Counter/Counters';
import Hobbies from '../components/Hobbies/Hobbies';
import History from '../components/History/History';
import ProjectsSwiper from '../components/Projects/ProjectsSwiper';
import BlogSwiper from '../components/Blog/BlogSwiper';
import Contact from '../components/Contact/Contact';

export default function HomePage(props) {
  return (
    <>
      {/* heading for banner */}
      <Banner background={props.background} setBackground={props.setBackground} data={props.data.banner} />

      {/* counters */}
      <Counters data={props.data.counters} />

      {/* TEST */}
      <Hobbies />

      {/* projects */}
      <ProjectsSwiper data={props.data.projects} />

      {/* education history */}
      <History data={props.data.history} />

      {/* newsletter / posts */}
      <BlogSwiper data={props.data.blog} />

      {/* contact info */}
      <Contact data={props.data.contact} />
    </>
  );
}
