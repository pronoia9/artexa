'use client';

import { styled, css } from 'styled-components';
import { motion } from 'framer-motion';

import { SVGs } from '@/components';
import { dataStore } from '@/data';
import { colors } from '@/styles';
import { navbarMotion, rem } from '@/utils';

export const ThemeButton = () => {
  const { navbarOpen, themes, theme, toggleTheme, accent, setAccent } = dataStore((state) => ({
    navbarOpen: state.navbarOpen,
    themes: state.themes,
    theme: state.theme,
    toggleTheme: state.toggleTheme,
    accent: state.accent,
    setAccent: state.setAccent,
  }));

  const handleThemeClick = (title) => {
    theme !== title && toggleTheme();
  };

  const handleAccentClick = (color) => {
    accent !== color && setAccent(color);
  };

  return (
    <Container className='art-language-change' $navbarOpen={navbarOpen}>
      <div>
        {themes.map(({ title, icon }) => (
          <ThemeItem
            className='theme-button'
            key={`theme-button-${title}`}
            $active={theme === title}
            $navbarOpen={navbarOpen}
            onClick={() => handleThemeClick(title)}
          >
            <SVGs type={icon} height={16} />
          </ThemeItem>
        ))}
      </div>

      <AccentContainer $navbarOpen={navbarOpen} {...navbarMotion.accentContainer}>
        {Object.entries(colors).map((color, index) => (
          <AccentItem
            key={`theme-button-accent-${index}`}
            className='theme-button'
            $navbarOpen={navbarOpen}
            $index={index}
            $active={accent === color[0]}
            $colors={[color[1]]}
            onClick={() => handleAccentClick(color[0])}
            whileHover={{ scale: accent !== color[0] ? 1.75 : 1 }}
            {...navbarMotion.accent}
          />
        ))}
      </AccentContainer>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: ${rem(30)} ${rem(26)};
  display: flex;
  flex-direction: ${({ $navbarOpen }) => ($navbarOpen ? 'column' : 'row')};
  flex-direction: column;
  gap: ${rem(10)};
  box-shadow: 0 ${rem(1)} ${rem(4)} 0 var(--c-box-shadow);
  background: var(--c-bg-menu-2);
  isolation: isolate;
`;

const ThemeItem = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 ${rem(3)} ${rem(8)} 0 var (--c-box-shadow);
  background: ${({ $active }) => ($active ? 'var(--c-accent-1)' : 'var(--c-bg)')};
  border-radius: 50%;
  cursor: ${({ $active }) => !$active && 'pointer'};
  transition: 0.55s ease-in-out;
  z-index: 1;

  i, svg {
    padding: 1px;
    fill: ${({ $active }) => (!$active ? 'var(--c-font-2)' : 'var(--c-bg-wrapper)')};
    /* font-size: 1rem; */
    /* font-weight: 600; */
    transition: 0.4s ease-in-out;
  }

  &:first-child {
    margin-bottom: ${rem(10)};
  }

  ${({ $navbarOpen }) =>
    $navbarOpen &&
    css`
      &:first-child {
        transform: translateX(calc(${rem(5)} + 1.75rem + 0.5rem));
      }

      &:last-child {
        transform: translateY(calc(${rem(-10)} - 1.75rem));
      }
    `}
`;

const AccentContainer = styled(motion.div)`
  position: absolute;
  bottom: ${rem(30)};
  left: ${rem(25)};
  right: ${rem(25)};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: ${rem(10)};
  z-index: ${({ $navbarOpen }) => ($navbarOpen ? 0 : -1)};
`;

const AccentItem = styled(motion.div)`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  background: ${({ $index }) => `linear-gradient(45deg, 
    ${Object.entries(colors)[$index][1].accent1} 0%, 
    ${Object.entries(colors)[$index][1].accent2} 25%, 
    ${Object.entries(colors)[$index][1].accent3} 50%, 
    ${Object.entries(colors)[$index][1].accent4} 75%, 
    ${Object.entries(colors)[$index][1].accent5} 100%)
  `};
  border-radius: 50%;
  cursor: ${({ $active }) => !$active && 'pointer'};

  &:before {
    content: '';
    position: absolute;
    bottom: -0.25rem;
    left: -0.25rem;
    background: inherit;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: ${({ $active }) => !$active && 'none'};
    animation: ${({ $active }) => $active && 'puls 1s infinite'};
  }
`;
