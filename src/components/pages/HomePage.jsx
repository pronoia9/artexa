import { Contact, Counters, Hero, History, PageWrapper, Projects, Technologies } from '..';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Counters />
      <Projects type='grid' limit={true} />
      <History />
      <Technologies type='swiper' />
      <Contact />
    </>
  );
};

export default PageWrapper(HomePage, 'homepage');
