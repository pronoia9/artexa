import { useLocation } from 'react-router-dom';
import { dataStore } from '../../../store/dataStore';

const NavbarCurrentPage = () => {
  const routes = dataStore((state) => state.routes);
  let location = useLocation();
  
  return (
    <div className='art-current-page'>
      <span>{routes.find((r) => r.path === location.pathname)?.title}</span>
    </div>
  );
};
export default NavbarCurrentPage;
