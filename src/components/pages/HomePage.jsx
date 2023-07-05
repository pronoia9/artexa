import { PageWrapper, Hero, Counters, Services, Projects, History, Technologies, Contact } from '..';
import { contactMotion, countersMotion, heroMotion, historyMotion, projectsMotion, servicesMotion, technologiesMotion } from '../../utils';

const HomePage = () => {
  return (
    <>
      <Hero motion={heroMotion.container(0.75, 0.75)} />
      <Counters motion={countersMotion.container(0.1)} />
      <Services motion={servicesMotion.container()} />
      <Projects motion={projectsMotion.container(0.5, 1)} type='grid' limit={true} />
      <History motion={historyMotion.container()} />
      <Technologies motion={technologiesMotion.container()} type='swiper' />
      <Contact motion={contactMotion} />
    </>
  );
};

export default PageWrapper(HomePage, 'homepage');
