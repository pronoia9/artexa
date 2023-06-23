import { dataStore } from '../../../store/dataStore';
import { NavbarListItem } from './';

const NavbarList = () => {
  const data = dataStore((state) => state.routes);
  return (
    <div className='art-scroll-frame'>
      <nav>
        <ul className='main-menu'>
          {data.map((route, index) => (
            <NavbarListItem key={`navbarlist-${index}`} {...route} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default NavbarList;
