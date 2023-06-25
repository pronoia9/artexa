import { dataStore } from '../../../store/dataStore';
import { GradientHeading } from '../../../styles';

export const HeroHeading = () => {
  const data = dataStore((state) => state.hero.heading);

  return (
    <GradientHeading className='mb-15'>
      {data.map((text, index) => (
        <div key={`hero-heading-${index}`}>{text}</div>
      ))}
    </GradientHeading>
  );
};
