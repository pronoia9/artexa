import NavbarListItem from './NavbarListItem';

export default function NavbarList({ data, setNavbarActive, currentPage }) {
  return (
    <div className='art-scroll-frame'>
      <nav>
        <ul className='main-menu'>
          {data.map((li) => (
            <NavbarListItem key={li.title} item={li} setNavbarActive={setNavbarActive} currentPage={currentPage} />
          ))}
        </ul>
      </nav>
    </div>
  );
}