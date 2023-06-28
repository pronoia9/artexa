import { styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';
import { GradientButton } from '../../../styles/ButtonStyles';

export const HeroButton = ({ handleClick }) => {
  const data = dataStore((state) => state.hero.button);

  return (
    <Button className='art-buttons-frame'>
      <a href={data.url} className='art-btn art-btn-md' onClick={handleClick}>
        <span>{data.text}</span>
      </a>
    </Button>
  );
};

const Button = styled(GradientButton)``;