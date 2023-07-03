import { PageWrapper, Hero, Counters, Services, Projects, History, Technologies, Contact } from '..';
import { contactMotion, countersMotion, heroMotion, historyMotion, projectsMotion, technologiesMotion } from '../../utils';

const HomePage = () => {
  return (
    <>
      <Hero motion={heroMotion.container(0.75, 0.75)} />
      <Counters motion={countersMotion.container(0.1)} />
      <Services />
      <Projects motion={projectsMotion.container()} type='grid' limit={true} />
      <History motion={historyMotion} />
      <Technologies motion={technologiesMotion.container} type='swiper' />
      <Contact motion={contactMotion} />
    </>
  );
};

export default PageWrapper(HomePage, 'homepage');
