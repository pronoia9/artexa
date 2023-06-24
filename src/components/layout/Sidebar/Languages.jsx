import { styled } from 'styled-components';

import { Progressbar } from '../..';
import { dataStore } from '../../../store/dataStore';
import { rem } from '../../../utils';

export const Languages = () => {
  const data = dataStore((state) => state.sidebar.languages);
  return (
    <LanguagesContainer className='art-lang-skills p-30-15'>
      {data.map((language, index) => (
        <LanguagesItem key={`sidebar-language-${index}`} {...language} index={index} />
      ))}
    </LanguagesContainer>
  );
};

export const LanguagesItem = (props) => {
  return (
    <ItemContainer className='art-lang-skills-item'>
      <Progressbar {...props} type='circle' />
      <h6>{props.language}</h6>
    </ItemContainer>
  );
};

const LanguagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemContainer = styled.div`
  width: 33.33333%;
  text-align: center;
  margin-bottom: ${rem(15)};
`;