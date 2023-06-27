import { Contact, Counters, Hero, History, PageWrapper, ProjectsSwiper, TechnologiesSwiper } from '..';

const HomePage = () => {
  return (
    <>
      <Hero framerDelay={1} />
      <Counters framerDelay={2} />
      <ProjectsSwiper framerDelay={3} />
      <History framerDelay={4} />
      <TechnologiesSwiper framerDelay={5} />
      <Contact framerDelay={6} />
    </>
  );
};

export default PageWrapper(HomePage, 'homepage');
