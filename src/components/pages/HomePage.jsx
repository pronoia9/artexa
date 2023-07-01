import { Contact, Counters, Hero, History, PageWrapper, ProjectsGrid, TechnologiesSwiper } from '..';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Counters />
      <ProjectsGrid limit={true} />
      <History />
      <TechnologiesSwiper />
      <Contact />
    </>
  );
};

export default PageWrapper(HomePage, 'homepage');
