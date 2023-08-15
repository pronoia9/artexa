'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SVGs } from '@/components';
import { sidebar, sidebarMotion } from '@/utils';

export const Socials = () => {
  const data = sidebar.social;
  return (
    <Container className='art-ls-social acc' {...sidebarMotion.socials.container}>
      {data.map((social, index) => (
        <SocialsItem key={`sidebar-socials-${index}`} {...social} index={index} />
      ))}
    </Container>
  );
};

const Container = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.15rem;
  background: var(--c-bg-menu-2);
  box-shadow: 0 1px 4px 0 var(--c-box-shadow);
  z-index: 999;
  isolation: isolate;
`;

export const SocialsItem = ({ platform, fancybox, url }) => (
  <SocialItem
    className={`${platform}${fancybox ? ' fancybox' : ''}`}
    href={!fancybox ? url : null}
    target='_blank'
    rel='noopener noreferrer'
    {...sidebarMotion.socials.item}
  >
    <SVGs type={platform} height={15} />
  </SocialItem>
);

const SocialItem = styled(motion.a)`
  color: var(--c-font-1);
  transition: 0.2s ease-in-out;

  svg {
    fill: var(--c-font-1);
  }

  &:hover {
    svg {
      text-shadow: 0 0 3px var(--c-font-shadow);
      fill: var(--c-accent-1);
    }
  }

  &.fancybox:hover {
    svg {
      fill: var(--c-font-2);
    }
  }
`;
