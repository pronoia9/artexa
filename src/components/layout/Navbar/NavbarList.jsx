import { styled } from 'styled-components';

import { NavbarListItem } from './';
import { dataStore } from '../../../store/dataStore';

export const NavbarList = () => {
  const data = dataStore((state) => state.navbar);
  return (
    <Container>
      <NavigationList className='main-menu'>
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

const NavigationList = styled.ul`
  position: relative;
  bottom: -5%;
  width: 100%;
  padding: 0;
  margin: 0;
`;
