import { Contact, Counters, Hero, History, PageWrapper, Projects, Technologies } from '..';
import { contactMotion, heroMotion, historyMotion, projectsMotion, technologiesMotion } from '../../utils';

const HomePage = () => {
  return (
    <>
      <Hero motion={heroMotion.hero} />
      <Counters motion={{}} />
      <Projects motion={projectsMotion.container()} type='grid' limit={true} />
      <History motion={historyMotion} />
      <Technologies motion={technologiesMotion.container} type='swiper' />
      <Contact motion={contactMotion} />
    </>
  );
};

export default PageWrapper(HomePage, 'homepage');
