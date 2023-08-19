'use client';

import { SectionWrapper, Timeline } from '@/components';
import { history as data } from '@/utils';

export default SectionWrapper(() => {
  if (!data) return;
  return (
    <Timeline titles={['Certificates', 'Courses']}>
      {data.education}
      {data.courses}
    </Timeline>
  );
}, 'history');
