import { styled } from 'styled-components';
import { dataStore } from '../../../store/dataStore';

const NavbarButton = () => {
  const { navbarOpen, toggleNavbar } = dataStore((state) => ({ navbarOpen: state.navbarOpen, toggleNavbar: state.toggleNavbar }));

  return (
    <Container className='art-menu-bar-header'>
      <Wrapper className={`art-menu-bar-btn${navbarOpen ? ' art-active' : ''}`} open={`${navbarOpen}`} onClick={() => toggleNavbar()}>
        <span />
      </Wrapper>
    </Container>
  );
};
export default NavbarButton;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--c-gradient-2);
  box-shadow: 0 1px 4px 0 var(--c-box-shadow);
  z-index: 9;
`;

const Wrapper = styled.div`
  pointer-events: all;

  &.art-disabled {
    opacity: 0;
    pointer-events: none;
  }

  @media (max-width: 920px) {
    transform: ${({ open }) => (open === 'true' ? 'translateX(0)' : 'translateX(-80px)')};
    transition: 0.4s ease-in-out;
  }
`;
