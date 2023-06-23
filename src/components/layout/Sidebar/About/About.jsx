import { AboutItem } from '../..';
import { dataStore } from '../../../../store/dataStore';

const About = () => {
  const data = dataStore((state) => state.sidebar.about);

  return (
    <div className='art-table p-15-15'>
      <ul>
        {data.map((item) => (
          <AboutItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
export default About;
