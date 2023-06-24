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
      <ThemeContainer $navbarOpen={navbarOpen}>
        {themes.map(({ title, icon }) => (
          <ThemeItem key={`theme-button-${title}`} $active={theme === title} onClick={toggleTheme}>
            <i className={icon} />
          </ThemeItem>
        ))}
      </ThemeContainer>

      <AccentContainer $navbarOpen={navbarOpen}>
        <div />
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
  gap: ${rem(10)};
  box-shadow: 0 ${rem(1)} ${rem(4)} 0 var(--c-box-shadow);
  background: var(--c-gradient-3) /* linear-gradient(159deg, #252532fa 0%, #23232efa 100%) */;

  & > div {
    transition: 0.55s ease-in-out;
  }
`;

const ThemeContainer = styled.div`
  width: 100%;
  display: flex;
  gap: ${rem(10)};
  flex-direction: ${({ $navbarOpen }) => ($navbarOpen ? 'row' : 'column')};
`;

const ThemeItem = styled.div`
  height: 1.75rem;
  width: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  box-shadow: inset 0 ${rem(3)} ${rem(8)} 0 var (--c-box-shadow);
  background: ${({ $active }) => ($active ? 'var(--c-accent-1)' : 'var(--c-background-1)')};
  border-radius: 50%;
  cursor: ${({ $active }) => !$active && 'pointer'};

  i {
    color: ${({ $active }) => $active && 'var(--c-font-1)'};
    font-size: 1rem;
    font-weight: 600;
    transition: 0.4s ease-in-out;
  }
`;

const AccentContainer = styled.div`
  width: calc(100% - 30px);
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  ${({ $navbarOpen }) => !$navbarOpen && css`
    position: absolute;
    bottom: ${rem(30)};
    left: ${rem(79)};
  `}
`;

const AccentItem = styled(ThemeItem)`
  opacity: ${({ $navbarOpen }) => ($navbarOpen ? 1 : 0)};
  background: ${({ $index }) => Object.values(colors)[$index].accent1};
  border-radius: 50%;
  border: 2px solid var(--c-font-6);
  cursor: ${({ $active }) => !$active && 'pointer'};
  transform: ${({ $navbarOpen }) => ($navbarOpen ? 'translateX(0)' : `translateX(${rem(60)})`)};
  ${({ $index }) => css`transition-delay: ${$index * 0.05}s;`};
`;
