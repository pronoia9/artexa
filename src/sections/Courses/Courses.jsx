import { SectionWrapper, Timeline } from '../../components';
import { dataStore } from '../../utils/dataStore';

export default SectionWrapper(() => {
  const data = dataStore((state) => state.courses);

  return data.map((col, index) => <Timeline key={`courses-${index}-${col?.title}`} {...col} column={2} />);
}, 'courses');
