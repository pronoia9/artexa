import { styled } from 'styled-components';
import { dataStore } from '../../../store/dataStore';

const NavbarButton = () => {
  const { navbarOpen, toggleNavbar } = dataStore((state) => ({ navbarOpen: state.navbarOpen, toggleNavbar: state.toggleNavbar }));

  return (
    <Container className='art-menu-bar-header'>
      <Wrapper className='art-menu-bar-btn' $navbarOpen={navbarOpen} onClick={() => toggleNavbar()}>
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
  width: 15px;
  height: 12px;
  margin-top: -10px;
  padding: 30px;
  display: inline-block;
  pointer-events: all;

  &.art-disabled {
    opacity: 0;
    pointer-events: none;
  }

  span {
    content: '';
    position: relative;
    width: 15px;
    height: 3px;
    display: block;
    margin: 5px 0 0;
    background: var(--c-font-2);
    border-radius: 1px;
    backface-visibility: hidden;
    transform: ${({ $navbarOpen }) => $navbarOpen && 'rotate(45deg)'};
    transition: 0.4s ease-in-out;

    &::after,
    &:before {
      content: '';
      position: absolute;
      width: 15px;
      height: 3px;
      display: block;
      border-radius: 1px;
      background: var(--c-font-2);
      backface-visibility: hidden;
      transition: 0.4s ease-in-out;
    }

    &:before {
      top: -5px;
      transform: ${({ $navbarOpen }) => $navbarOpen && 'translate(0px, 5px) rotate(-90deg)'};
    }

    &:after {
      top: 5px;
      transform: ${({ $navbarOpen }) => $navbarOpen && 'translate(0px, -5px) rotate(-90deg)'};
    }
  }

  &:hover {
    span,
    span:after,
    span:before {
      background: var(--c-font-1);
    }
  }

  @media (max-width: 920px) {
    transform: ${({ $navbarOpen }) => ($navbarOpen ? 'translateX(0)' : 'translateX(-80px)')};
    transition: 0.4s ease-in-out;
  }
`;
