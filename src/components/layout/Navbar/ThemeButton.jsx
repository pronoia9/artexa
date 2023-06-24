import { styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';
import { rem } from '../../../utils';

export const ThemeButton = () => {
  const { theme, toggleTheme } = dataStore((state) => ({ theme: state.theme, toggleTheme: state.toggleTheme }));
  return (
    <ThemeList className='art-language-change'>
      <ThemeListItem $active={theme === 'light'} onClick={toggleTheme}>
        <i className='far fa-sun' />
      </ThemeListItem>
      <ThemeListItem $active={theme === 'dark'} onClick={toggleTheme}>
        <i className='far fa-moon' />
      </ThemeListItem>
    </ThemeList>
  );
}

const ThemeList = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: ${rem(30)} ${rem(26)};
  box-shadow: 0 ${rem(1)} ${rem(4)} 0 var(--c-box-shadow);
  background: var(--c-gradient-3) /* linear-gradient(159deg, #252532fa 0%, #23232efa 100%) */;
`;

const ThemeListItem = styled.li`
  height: 1.75rem;
  width: 1.75rem;
  margin-bottom: ${rem(10)};
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  box-shadow: inset 0 ${rem(3)} ${rem(8)} 0 var (--c-box-shadow);
  background: ${({ $active }) => ($active ? 'var(--c-accent-1)' : 'var(--c-background-1)')};
  border-radius: 50%;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  i {
    color: ${({ $active }) => $active && 'var(--c-font-1)'};
    font-size: 1rem;
    font-weight: 600;
    transition: 0.4s ease-in-out;
  }
`;
