'use client';

import { SectionWrapper, Timeline } from '@/components';
import { courses as data } from '@/utils';

export default SectionWrapper(() => {
  if (!data) return;
  return data.map((col, index) => <Timeline key={`courses-${index}-${col?.title}`} {...col} column={2} />);
}, 'courses');
