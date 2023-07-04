import { ButtonGradient, Button } from '../..';
import { dataStore } from '../../../store/dataStore';

export const HeroButton = ({ handleClick }) => {
  const data = dataStore((state) => state.hero.button);

  return (
    <ButtonGradient>
      <Button title={data.text} arrow={false} onClick={handleClick} />
    </ButtonGradient>
  );
};
