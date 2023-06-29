import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { dataStore } from '../../../store/dataStore';
import { navbarMotion, rem } from '../../../utils';

const Path = (props) => <motion.path fill='transparent' strokeWidth='3' strokeLinecap='round' {...props} />;

export const NavbarButton = () => {
  const toggleNavbar = dataStore((state) => state.toggleNavbar);

  return (
    <Container className='art-menu-bar-header'>
      <Wrapper className='art-menu-bar-btn' onClick={() => toggleNavbar()}>
        <svg width='23' height='23' viewBox='0 0 23 23'>
          <Path {...navbarMotion.navbarButton.path1} />
          <Path d='M 2 9.423 L 20 9.423' {...navbarMotion.navbarButton.path2} />
          <Path {...navbarMotion.navbarButton.path3} />
        </svg>
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
  background: var(--c-gradient-2);
  box-shadow: 0 ${rem(1)} ${rem(4)} 0 var(--c-box-shadow);
  z-index: 9;
`;

const Wrapper = styled.button`
  padding: ${rem(30)};

  svg {
    stroke: var(--c-font-1);
    width: ${rem(15)};
    height: ${rem(15)};
  }

  &:hover {
    svg {
      stroke: var(--c-font-2);
    }
  }
`;
