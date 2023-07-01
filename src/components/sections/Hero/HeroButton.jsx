import { dataStore } from '../../../store/dataStore';
import { GradientButton } from '../../../styles/ButtonStyles';
import { buttonMotion } from '../../../utils';

export const HeroButton = ({ handleClick }) => {
  const data = dataStore((state) => state.hero.button);

  return (
    <GradientButton className='art-buttons-frame' {...buttonMotion.gradient}>
      <a href={data.url} className='art-btn art-btn-md' onClick={handleClick}>
        <span>{data.text}</span>
      </a>
    </GradientButton>
  );
};
