import { styled } from 'styled-components';
import { dataStore } from '../../../store/dataStore';

export const ThemeButton = () => {
  const theme = dataStore((state) => state.theme);
  return (
    <ThemeList className='art-language-change'>
      <ThemeListItem $active={theme === 'light'}>
        <i className='far fa-sun' />
      </ThemeListItem>
      <ThemeListItem $active={theme === 'dark'}>
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
  padding: 30px 26px;
  box-shadow: var(--c-box-shadow);
  background: var(--c-gradient-3) /* linear-gradient(159deg, #252532fa 0%, #23232efa 100%) */;
`;

const ThemeListItem = styled.li`
  height: 1.75rem;
  width: 1.75rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $active }) => $active && 'black'};
  list-style-type: none;
  box-shadow: var(--c-box-shadow);
  background: ${({ $active }) => ($active ? 'var(--c-accent-1)' : 'var(--c-background-1)')};
  border-radius: 50%;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  i {
    font-size: 1rem;
    font-weight: 600;
    transition: 0.4s ease-in-out;
  }
`;
