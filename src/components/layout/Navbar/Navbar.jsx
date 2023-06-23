import { NavbarButton, NavbarCurrentPage, NavbarList } from './';
import { dataStore } from '../../../store/dataStore';

const Navbar = () => {
  const { navbarOpen } = dataStore((state) => ({ navbarOpen: state.navbarOpen }));

  return (
    <div className={`art-menu-bar${navbarOpen ? ' art-active' : ''}`} active={`${navbarOpen}`}>
      <div id='art-menu-bar-frame' className='art-menu-bar-frame'>
        <NavbarButton />
        <NavbarCurrentPage />
        <NavbarList />
      </div>
    </div>
  );
};
export default Navbar;
