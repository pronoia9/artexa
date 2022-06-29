import React from 'react';
import Banner from '../components/Banner/Banner';
import Counters from '../components/Counter/Counters';
import History from '../components/History/History';
import ProjectsSwiper from '../components/Projects/ProjectsSwiper';
import BlogSwiper from '../components/Blog/BlogSwiper';
import Contact from '../components/Contact/Contact';

export default function HomePage({ data, background, changeBackground }) {
  const { banner, counters, projects, history, technologies, contact } = data;
  return (
    <>
      {/* heading for banner */}
      <Banner data={banner} background={background} changeBackground={changeBackground} />

      {/* counters */}
      <Counters data={counters} />

      {/* projects */}
      <ProjectsSwiper data={projects} />

      {/* education history */}
      <History data={history} />

      {/* newsletter / posts */}
      <BlogSwiper data={technologies} />

      {/* contact info */}
      <Contact data={contact} />
    </>
  );
}