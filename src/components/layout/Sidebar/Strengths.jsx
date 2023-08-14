'use client';

import { motion } from 'framer-motion';

import { Tag } from '@/styles';
import { rng, sidebarMotion, sidebar } from '@/utils';

export const Strengths = () => {
  const data = sidebar.strengths;

  return (
    <motion.div className='art-strengths p-15-15 acc' {...sidebarMotion.strengths.container}>
      {data.map((strength, index) => (
        <Tag key={`sidebar-strenghts-${index}`} {...sidebarMotion.strengths.item} $rng={rng(1, 5)}>
          {strength}
        </Tag>
      ))}
    </motion.div>
  );
};
