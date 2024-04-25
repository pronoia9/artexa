'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SmoothScroll, Profile, Info, Languages, HardSkills, SoftSkills, Strengths, Resume, Socials, SVGs } from '@/components';
import { dataStore } from '@/data';
import { rem, sidebarMotion } from '@/utils';

export const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = dataStore((state) => ({ sidebarOpen: state.sidebarOpen, toggleSidebar: state.toggleSidebar }));

  return (
    <Container className='art-info-bar' $active={sidebarOpen} {...sidebarMotion.sidebar}>
      <Wrapper className='art-info-bar-frame'>
        <MobileHeader className='art-info-bar-header' $active={sidebarOpen}>
          <div className='art-info-bar-btn' onClick={() => toggleSidebar()}>
            <SVGs type='ellipsis-vertical' width={3.75} height={14} />
          </div>
        </MobileHeader>

        <Profile />

        <SmoothScroll {...sidebarMotion.scrollContent}>
          <Info /> <motion.div className='art-ls-divider' {...sidebarMotion.divider(1.75 * 0.666)} />
          <Languages /> <motion.div className='art-ls-divider' {...sidebarMotion.divider(2.75 * 0.666)} />
          <HardSkills /> <motion.div className='art-ls-divider' {...sidebarMotion.divider(4 * 0.666)} />
          <SoftSkills /> <motion.div className='art-ls-divider' {...sidebarMotion.divider(5.75 * 0.666)} />
          <Strengths /> <motion.div className='art-ls-divider' {...sidebarMotion.divider(7 * 0.666)} />
          <Resume />
        </SmoothScroll>

        <Socials />
      </Wrapper>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  width: ${rem(290)};
  min-width: ${rem(290)};
  height: calc(100vh - ${rem(30)});
  padding: 0 ${rem(15)};
  background: var(--c-bg-menu-1);
  box-shadow: 0 ${rem(3)} ${rem(8)} 0 var(--c-box-shadow);
  z-index: 999;
  isolation: isolate;
  transition: 0.55s ease-in-out;

  .scroll-content {
    padding: ${rem(15 + 15 + 235)} 0 ${rem(50)}; // 15px padding from container, 15px from wrapper + height of the profile component
  }

  @media (max-width: ${rem(920)}) {
    position: absolute;
    left: ${({ $active }) => rem($active ? 0 : -290)};
    width: ${rem(290)};
    height: 100vh;
    transform: ${({ $active }) => $active && `translateX(${rem(290)})`};
  }

  @media (max-width: ${rem(290)}) {
    width: 100vw;
  }
`;

const Wrapper = styled.div`
  padding: 0 ${rem(15)};
`;

const MobileHeader = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: ${rem(70)};
  display: none;
  justify-content: flex-start;
  align-items: center;
  z-index: 999999999999;

  .art-info-bar-btn {
    margin-left: auto;
    pointer-events: all;
    font-size: ${rem(14)};
    padding: ${rem(30)};

    &.art-disabled {
      opacity: 0;
      pointer-events: none;
    }
  }

  @media (max-width: ${rem(920)}) {
    display: flex;

    .art-info-bar-btn {
      transform: ${({ $active }) => ($active ? 'translateX(0)' : `translateX(${rem(70)})`)};
      transition: 0.4s ease-in-out;
    }
  }
`;
