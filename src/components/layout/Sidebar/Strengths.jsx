'use client';

import { Tags } from '@/components';
import { sidebar } from '@/data';
import { sidebarMotion } from '@/utils';

export const Strengths = () => {
  return (
    <Tags
      data={sidebar.strengths}
      section='sidebar-strenghts'
      motion={sidebarMotion.strengths.item}
      className='art-strengths p-15-15 acc'
      {...sidebarMotion.strengths.container}
    />
  );
};
