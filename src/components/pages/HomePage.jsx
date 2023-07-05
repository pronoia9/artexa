import { PageWrapper, Hero, Counters, Services, Projects, History, Technologies, Contact } from '..';
import { contactMotion, countersMotion, heroMotion, historyMotion, projectsMotion, servicesMotion, technologiesMotion } from '../../utils';

const HomePage = () => {
  return (
    <>
      <Hero motion={heroMotion.container(0.75, 0.75)} />
      <Counters motion={countersMotion.container(0.1)} />
      <Services motion={servicesMotion.container(0.1)} />
      <Projects motion={projectsMotion.container(0.25, 0.5)} type='grid' limit={true} />
      <History motion={historyMotion.container(0.25, 1.5)} />
      <Technologies motion={technologiesMotion.container(0.25, 2.5)} type='swiper' />
      <Contact motion={contactMotion.container(0.25, 3.5)} />
    </>
  );
};

export default PageWrapper(HomePage, 'homepage');
