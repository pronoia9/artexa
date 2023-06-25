import { Contact, Counters, Hero, History, PageWrapper, ProjectsSwiper, TechnologiesSwiper } from '..';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Counters />
      <ProjectsSwiper />
      <History />
      <TechnologiesSwiper />
      <Contact />
    </>
  );
};

export default PageWrapper(HomePage, 'homepage');
