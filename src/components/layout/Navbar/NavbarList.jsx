import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { NavbarListItem } from '../..';
import { dataStore } from '../../../store/dataStore';
import { navbarMotion } from '../../../utils';

export const NavbarList = () => {
  const data = dataStore((state) => state.navbar);
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
