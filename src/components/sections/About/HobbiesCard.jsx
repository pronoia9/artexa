'use client';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

import { HoverExpand } from '@/components';

export const HobbiesCard = ({ title, image }) => {
  return (
    <Frame className='art-a art-hobbies-item-frame'>
      <Item data-fancybox='hobbies' href={image} className='art-a art-hobbies-item-frame art-horizontal'>
        <img src={image} alt={title} />
        <HoverExpand center={true} />
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

  display: block;
  width: 100%;
  outline: inherit;
  overflow: hidden;
  position: relative;
  padding-bottom: 60%;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: scale-down;
    object-position: center;
    filter: brightness(85%) blur(0);
    transition: 0.4s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.07);
      filter: brightness(100%) blur(0);
    }
  }
`;
