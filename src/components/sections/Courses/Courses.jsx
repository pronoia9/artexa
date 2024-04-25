'use client';

import { SectionWrapper, Timeline } from '@/components';
import { courses as data } from '@/data';

export const Courses = SectionWrapper(() => {
  if (!data) return <></>; // ! TEMP
  
  return data.map((col, index) => <Timeline key={`courses-${index}-${col?.title}`} {...col} column={2} />);
}, 'courses');
