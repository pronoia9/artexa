'use client';

import { SectionWrapper, Timeline } from '@/components';
import { history as data } from '@/utils';

export const History = SectionWrapper(() => {
  if (!data) return <></>; // ! TEMP

  return (
    <Timeline titles={['Certificates', 'Courses']}>
      {data.education}
      {data.courses}
    </Timeline>
  );
}, 'history');
