import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarButton from './NavbarButton';
import NavbarCurrentPage from './NavbarCurrentPage';
import NavbarList from './NavbarList';

export default function ArtMenuBar({ data, navbarActive, sidebarActive, setSidebarActive, setNavbarActive }) {
  // contains the current page
  const [currentPage, setCurrentPage] = useState('');
  // react router location
  let location = useLocation();

  useEffect(() => {
    setCurrentPage(() => {
      const l = location.pathname.replaceAll('/', '');
      return l === '/' ? 'Home' : l[0].toUpperCase() + l.slice(1);
    });
  }, [location]);

  return (
    <div className={navbarActive ? 'art-menu-bar art-active' : 'art-menu-bar'}>
      <div id='art-menu-bar-frame' className='art-menu-bar-frame'>
        <NavbarButton
          navbarActive={navbarActive}
          setNavbarActive={setNavbarActive}
          sidebarActive={sidebarActive}
          setSidebarActive={setSidebarActive}
        />
        <NavbarCurrentPage currentPage={currentPage} />
        <NavbarList data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} setNavbarActive={setNavbarActive} />
      </div>
    </div>
  );
}