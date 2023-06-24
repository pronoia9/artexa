import { styled, css } from 'styled-components';

import { dataStore } from '../../../store/dataStore';
import { themes, colors } from '../../../styles';
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

  return (
    <Container className='art-language-change' $navbarOpen={navbarOpen}>
      <ThemeContainer>
        {themes.map(({ title, icon }) => (
          <ThemeItem key={`theme-button-${title}`} $active={theme === title} $navbarOpen={navbarOpen} onClick={toggleTheme}>
            <i className={icon} />
          </ThemeItem>
        ))}
      </ThemeContainer>

      <AccentContainer $navbarOpen={navbarOpen}>
        {Object.entries(colors).map((color, index) => (
          <AccentItem
            key={`theme-button-accent-${index}`}
            $navbarOpen={navbarOpen}
            $index={index}
            $active={accent === color[0]}
            onClick={() => accent !== color[0] && setAccent(color[0])}
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
  background: var(--c-gradient-3) /* linear-gradient(159deg, #252532fa 0%, #23232efa 100%) */;
`;

const ThemeContainer = styled.div``;

const ThemeItem = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 ${rem(3)} ${rem(8)} 0 var (--c-box-shadow);
  background: ${({ $active }) => ($active ? 'var(--c-accent-1)' : 'var(--c-background-1)')};
  border-radius: 50%;
  cursor: ${({ $active }) => !$active && 'pointer'};
  transition: 0.55s ease-in-out;

  &:first-child {
    margin-bottom: ${rem(10)};
  }

  ${({ $navbarOpen }) =>
    $navbarOpen &&
    css`
      &:first-child {
        transform: translateX(calc(${rem(5)} + 1.75rem));
      }
      &:last-child {
        transform: translateY(calc(${rem(-10)} - 1.75rem));
      }
    `}

  i {
    color: ${({ $active }) => $active && 'var(--c-font-1)'};
    font-size: 1rem;
    font-weight: 600;
    transition: 0.4s ease-in-out;
  }
`;

const AccentContainer = styled.div`
  position: absolute;
  bottom: ${rem(30)};
  left: ${rem(22.5)};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const AccentItem = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  margin: 0 !important;
  opacity: ${({ $navbarOpen }) => ($navbarOpen ? 1 : 0)};
  background: ${({ $index }) => Object.values(colors)[$index].accent1};
  border-radius: 50%;
  border: 2px solid var(--c-font-6);
  cursor: ${({ $active }) => !$active && 'pointer'};
  transform: ${({ $navbarOpen }) => ($navbarOpen ? 'translateX(0)' : `translateX(${rem(60)})`)};
  transition: 0.55s ease-in-out;
  ${({ $index }) => css`transition-delay: ${$index * 0.05}s;`};
`;
