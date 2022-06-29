import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarButton from './NavbarButton';
import NavbarCurrentPage from './NavbarCurrentPage';
import NavbarList from './NavbarList';

export default function ArtMenuBar({ data, navbarActive, sidebarActive, setSidebarActive, setNavbarActive }) {
  // contains the current page
  const [currentPage, setCurrentPage] = useState('');
  const [currentPath, setCurrentPath] = useState('');
  // react router location
  let location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
    setCurrentPage(() => {
      const location = currentPath.replaceAll('/', '');
      return location ? location[0].toUpperCase() + location.slice(1) : currentPath === '/' ? 'Home' : '';
    });
  }, [location, currentPath]);

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
        <NavbarList data={data} currentPage={currentPage} currentPath={currentPath} setCurrentPage={setCurrentPage} setNavbarActive={setNavbarActive} />
      </div>
    </div>
  );
}