import { styled } from 'styled-components';
import { dataStore } from '../../../../store/dataStore';

const Name = () => {
  const data = dataStore((state) => state.sidebar.profile);

  return (
    <Text className='art-name mb-10'>
      <a href={data.nameLink}>{data.name}</a>
    </Text>
  );
};
export default Name;

const Text = styled.h5`
  a {
    color: var(--c-font-1);
    transition: 0.4s ease-in-out;

    &:hover {
      color: var(--c-accent-1);
    }
  }
`;
