import { styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';
import { NavbarListItem } from './';

const NavbarList = () => {
  const data = dataStore((state) => state.routes);
  return (
    <div className='art-scroll-frame'>
      <Navigation>
        <NavigationList className='main-menu'>
          {data.map((route, index) => (
            <NavbarListItem key={`navbarlist-${index}`} {...route} index={index} />
          ))}
        </NavigationList>
      </Navigation>
    </div>
  );
};
export default NavbarList;

const Navigation = styled.nav`
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