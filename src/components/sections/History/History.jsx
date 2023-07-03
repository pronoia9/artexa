import { SectionWrapper, Timeline } from '../..';
import { dataStore } from '../../../store/dataStore';

const History = () => {
  const data = dataStore((state) => state.history);

  return (
    <>
      <Timeline titles={['Certificates', 'Courses']}>
        {data.education}
        {data.courses}
      </Timeline>
    </>
  );
};

export default SectionWrapper(History, 'history');
