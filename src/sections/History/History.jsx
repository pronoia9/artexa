import { SectionWrapper, Timeline } from '../../components';
import { dataStore } from '../../utils/dataStore';

export default SectionWrapper(() => {
  const data = dataStore((state) => state.history);

  return (
    <Timeline titles={['Certificates', 'Courses']}>
      {data.education}
      {data.courses}
    </Timeline>
  );
}, 'history');
