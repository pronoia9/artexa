import { SectionWrapper, Timeline } from '../..';
import { dataStore } from '../../../store/dataStore';

export default SectionWrapper(() => {
  const data = dataStore((state) => state.history);

  return (
    <Timeline titles={['Certificates', 'Courses']}>
      {data.education}
      {data.courses}
    </Timeline>
  );
}, 'history');
