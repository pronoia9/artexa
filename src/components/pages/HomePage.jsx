import { Contact, Counters, Hero, History, PageWrapper, Projects, ProjectsGrid, TechnologiesSwiper } from '..';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Counters />
      <Projects type='grid' limit={true} />
      <History />
      <TechnologiesSwiper />
      <Contact />
    </>
  );
};

export default PageWrapper(HomePage, 'homepage');
