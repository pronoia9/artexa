import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { SplitText } from '../../../components/SplitText';
import { dataStore } from '../../../../store/dataStore';

export const ProfileName = () => {
  const data = dataStore((state) => state.sidebar.profile);

  return (
    <NameText className='art-name mb-10'>
      <Link to={data.nameLink}>
        <SplitText>{data.name}</SplitText>
      </Link>
    </NameText>
  );
};

const NameText = styled.h3`
  a {
    color: var(--c-font-2);
    transition: 0.4s ease-in-out;

    &:hover {
      color: var(--c-accent-1);
    }
  }
`;
