import Banner from '../components/Banner/Banner';
import Counters from '../components/Counter/Counters';
import History from '../components/History/History';
import ProjectsSwiper from '../components/Projects/ProjectsSwiper';
import TechnologiesSwiper from '../components/Technologies/TechnologiesSwiper';
import Contact from '../components/Contact/Contact';

export default function HomePage({ data, background, changeBackground }) {
  const { banner, counters, projects, history, technologies, contact } = data;
  return (
    <>
      {/* heading for banner */}
      <Banner data={banner} background={background} changeBackground={changeBackground} />

      {/* counters */}
      <Counters data={counters} projectsCount={projects.projects.length} />

      {/* projects */}
      <ProjectsSwiper data={projects} />

      {/* education history */}
      <History data={history} />

      {/* newsletter / posts */}
      <TechnologiesSwiper data={technologies} />

      {/* contact info */}
      <Contact data={contact} />
    </>
  );
}