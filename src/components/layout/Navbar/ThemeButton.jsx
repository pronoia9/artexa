import { styled, css } from 'styled-components';

import { dataStore } from '../../../store/dataStore';
import { colors } from '../../../styles';
import { rem } from '../../../utils';

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
          <ThemeItem key={`theme-button-${title}`} $active={theme === title} $navbarOpen={navbarOpen} onClick={() => handleThemeClick(title)}>
            <i className={icon} />
          </ThemeItem>
        ))}
      </div>

      <AccentContainer $navbarOpen={navbarOpen}>
        {Object.entries(colors).map((color, index) => (
          <AccentItem
            key={`theme-button-accent-${index}`}
            $navbarOpen={navbarOpen}
            $index={index}
            $active={accent === color[0]}
            $colors={[color[1]]}
            onClick={() => handleAccentClick(color[0])}
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
  
  &:first-child {
    margin-bottom: ${rem(10)}; 
  }

  ${({ $navbarOpen }) =>
    $navbarOpen &&css`
      &:first-child {
        transform: translateX(calc(${rem(5)} + 1.75rem + 0.5rem)); 
      }

      &:last-child {
        transform: translateY(calc(${rem(-10)} - 1.75rem)); 
      }
    `}

  i {
    color: ${({ $active }) => !$active ? 'var(--c-font-2)' : 'var(--c-bg-wrapper)'};
    font-size: 1rem;
    font-weight: 600;
    transition: 0.4s ease-in-out;
  }
`;

const AccentContainer = styled.div`
  position: absolute;
  bottom: ${rem(30)};
  left: ${rem(25)};
  right: ${rem(25)};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: ${rem(10)};
  z-index: ${({ $navbarOpen }) => $navbarOpen ? 0 : -1};
`;

const AccentItem = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  opacity: ${({ $navbarOpen }) => ($navbarOpen ? 1 : 0)};
  background: ${({ $index }) => `linear-gradient(45deg, 
    ${Object.entries(colors)[$index][1].accent1} 0%, 
    ${Object.entries(colors)[$index][1].accent2} 25%, 
    ${Object.entries(colors)[$index][1].accent3} 50%, 
    ${Object.entries(colors)[$index][1].accent4} 75%, 
    ${Object.entries(colors)[$index][1].accent5} 100%)
  `};
  border-radius: 50%;
  cursor: ${({ $active }) => !$active && 'pointer'};
  transform: ${({ $navbarOpen }) => ($navbarOpen ? 'translateX(0)' : `translateX(${rem(60)})`)};
  transition: 0.55s ease-in-out;
  ${({ $index }) => css`transition-delay: ${$index * 0.05}s;`};

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

  &:hover {
    transform: ${({ $active }) => !$active && `scale(1.25)`};
  }
`;
