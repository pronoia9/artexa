import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SocialsItem } from '../../..';
import { dataStore } from '../../../../store/dataStore';
import { sidebarMotion } from '../../../../utils';

export const Socials = () => {
  const data = dataStore((state) => state.sidebar.social);
  return (
    <Container className='art-ls-social' {...sidebarMotion.socials.container}>
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
