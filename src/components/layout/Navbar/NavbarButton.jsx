import { dataStore } from '../../../store/dataStore';

const NavbarButton = () => {
  const { navbarOpen, toggleNavbar } = dataStore((state) => ({ navbarOpen: state.navbarOpen, toggleNavbar: state.toggleNavbar }));

  return (
    <div className='art-menu-bar-header'>
      <div className={`art-menu-bar-btn${navbarOpen ? ' art-active' : ''}`} active={`${navbarOpen}`} onClick={() => toggleNavbar()}>
        <span />
      </div>
    </div>
  );
};
export default NavbarButton;
