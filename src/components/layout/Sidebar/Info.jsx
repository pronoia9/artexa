import { styled } from 'styled-components';
import { dataStore } from '../../../store/dataStore';

export const Info = () => {
  const data = dataStore((state) => state.sidebar.about);

  return (
    <div className='art-table p-15-15'>
      <ul>
        {data.map((item) => (
          <InfoItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export const InfoItem = ({ title, subtitle }) => {
  return (
    <ListItem>
      <span>{title}</span>
      <span>{subtitle}</span>
    </ListItem>
  );
};

const ListItem = styled.li`
  span:first-child {
    color: var(--c-font-2);
  }
`;