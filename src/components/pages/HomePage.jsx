import { PageWrapper, Hero, Counters, Services, Projects, History, Technologies, Contact } from '..';

const HomePage = () => {
  return (
    <>
      <Hero stagger={0.25} />
      <Counters stagger={0.1} delay={1} />
      <Services stagger={0.1} delay={1.25} />
      <Projects stagger={0.25} delay={2} type='grid' limit={true} />
      <History stagger={0.25} delay={4} />
      <Technologies stagger={0.25} delay={5} type='swiper' />
      <Contact stagger={0.25} delay={6} />
    </>
  );
};

export default PageWrapper(HomePage, 'homepage');
