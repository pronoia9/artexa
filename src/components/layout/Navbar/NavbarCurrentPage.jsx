'use client';

import { usePathname } from 'next/navigation';
import { styled } from 'styled-components';

import { routes, rem, dataStore } from '@/utils';

export const NavbarCurrentPage = () => {
  const pathname = usePathname();
  const { navbarOpen } = dataStore((state) => ({ navbarOpen: state.navbarOpen }));

  return (
    <Container className='art-current-page' $navbarOpen={navbarOpen}>
      <span>{routes.find((r) => r.path === pathname)?.title}</span>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: ${rem(200)};
  left: ${rem(-62)};
  width: ${rem(200)};
  color: var(--c-font-2);
  font-size: ${rem(11)};
  font-weight: 500;
  letter-spacing: ${rem(1)};
  text-transform: uppercase;
  overflow: hidden;
  opacity: ${({ $navbarOpen }) => ($navbarOpen ? 0 : 1)};
  transform: rotate(90deg);
  transition: 0.4s ease-in-out;
`;
