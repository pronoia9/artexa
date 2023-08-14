import { SectionWrapper, Timeline } from '@/components';
import { history as data } from '@/utils';

export default SectionWrapper(() => {
  return (
    <Timeline titles={['Certificates', 'Courses']}>
      {data.education}
      {data.courses}
    </Timeline>
  );
}, 'history');
