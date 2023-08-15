'use client';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

import { HoverExpand } from '@/components';

export const HobbiesCard = ({ title, image }) => {
  return (
    <Frame className='art-a art-hobbies-item-frame acc'>
      <Item data-fancybox='hobbies' href={image} className='art-a art-hobbies-item-frame art-horizontal'>
        <img src={image} alt={title} />
        <HoverExpand />
      </Item>
    </Frame>
  );
};

const Frame = styled(motion.div)`
  padding-bottom: 0;
  box-shadow: none;

  &:hover {
    .art-item-hover {
      opacity: 0.8;
    }
  }
`;

const Item = styled.div`
  height: 100px;
  padding: 0;
  box-shadow: none;

  img {
    object-fit: scale-down !important;
  }
`;
