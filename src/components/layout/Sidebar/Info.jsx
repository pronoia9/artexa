'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SplitText } from '@/components';
import { sidebarMotion, sidebar } from '@/utils';

export const Info = () => {
  const data = sidebar.about;

  return (
    <motion.div className='art-table p-15-15' {...sidebarMotion.info.container}>
      <ul>
        {data.map((item, index) => (
          <InfoItem key={item.id} {...item} index={index} />
        ))}
      </ul>
    </motion.div>
  );
};

export const InfoItem = ({ title, subtitle, index }) => {
  return (
    <ItemContainer {...sidebarMotion.info.item}>
      <SplitText>{title}</SplitText>
      <motion.span {...sidebarMotion.info.subtitle}>{subtitle}</motion.span>
    </ItemContainer>
  );
};

const ItemContainer = styled(motion.li)`
  span:first-child {
    color: var(--c-font-2);
  }
`;
