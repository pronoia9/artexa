import { styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';
import { rem } from '../../../utils';

export const NavbarButton = () => {
  const { navbarOpen, toggleNavbar } = dataStore((state) => ({ navbarOpen: state.navbarOpen, toggleNavbar: state.toggleNavbar }));

  return (
    <Container className='art-menu-bar-header'>
      <Wrapper className='art-menu-bar-btn' $navbarOpen={navbarOpen} onClick={() => toggleNavbar()}>
        <Button $navbarOpen={navbarOpen} />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${rem(70)};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--c-gradient-2);
  box-shadow: 0 ${rem(1)} ${rem(4)} 0 var(--c-box-shadow);
  z-index: 9;
`;

const Wrapper = styled.div`
  width: ${rem(15)};
  height: ${rem(12)};
  margin-top: ${rem(-10)};
  padding: ${rem(30)};
  display: inline-block;
  pointer-events: all;

  &.art-disabled {
    opacity: 0;
    pointer-events: none;
  }
  
  &:hover {
    span, span:after, span:before {
      background: var(--c-font-1);
    }
  }
  
  @media (max-width: ${rem(920)}) {
    transform: ${({ $navbarOpen }) => ($navbarOpen ? 'translateX(0)' : `translateX(${rem(-80)})`)};
    transition: 0.4s ease-in-out;
  }
`;

const Button = styled.span`
  content: '';
  position: relative;
  width: ${rem(15)};
  height: ${rem(3)};
  display: block;
  margin: ${rem(5)} 0 0;
  background: var(--c-font-2);
  border-radius: ${rem(1)};
  backface-visibility: hidden;
  transform: ${({ $navbarOpen }) => $navbarOpen && 'rotate(45deg)'};
  transition: 0.4s ease-in-out;

  &::after, &:before {
    content: '';
    position: absolute;
    width: ${rem(15)};
    height: ${rem(3)};
    display: block;
    border-radius: ${rem(1)};
    background: var(--c-font-2);
    backface-visibility: hidden;
    transition: 0.4s ease-in-out;
  }

  &:before {
    top: ${rem(-5)};
    transform: ${({ $navbarOpen }) => $navbarOpen && `translate(0px, ${rem(5)}) rotate(-90deg)`};
  }

  &:after {
    top: ${rem(5)};
    transform: ${({ $navbarOpen }) => $navbarOpen && `translate(0px, ${rem(-5)}) rotate(-90deg)`};
  }
`;