import NavbarListItem from './NavbarListItem';

export default function NavbarList({ data, setNavbarActive, currentPage, setCurrentPage }) {
  return (
    <div className='art-scroll-frame'>
      <nav>
        <ul className='main-menu'>
          {data.map((li) => (
            <NavbarListItem
              key={li.title}
              item={li}
              setNavbarActive={setNavbarActive}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}