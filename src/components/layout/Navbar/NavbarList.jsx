'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { NavbarListItem } from '@/components';
import { navbar as data } from '@/data';
import { navbarMotion } from '@/utils';

export const NavbarList = () => {
  return (
    <Container>
      <NavigationList className='main-menu' {...navbarMotion.list}>
        {data.map((route, index) => (
          <NavbarListItem key={`navbarlist-${index}`} {...route} index={index} />
        ))}
      </NavigationList>
    </Container>
  );
};

const Container = styled.nav`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavigationList = styled(motion.ul)`
  position: relative;
  bottom: -5%;
  width: 100%;
  padding: 0;
  margin: 0;
`;
