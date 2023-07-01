import { Contact, Counters, Hero, History, PageWrapper, ProjectsGrid, ProjectsSwiper, TechnologiesSwiper } from '..';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Counters />
      <ProjectsSwiper />
      <ProjectsGrid />
      <History />
      <TechnologiesSwiper />
      <Contact />
    </>
  );
};

export default PageWrapper(HomePage, 'homepage');
