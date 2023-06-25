import { dataStore } from '../../../store/dataStore';
import { GradientHeading } from '../../../styles';

export const HeroHeading = () => {
  const data = dataStore((state) => state.hero.heading);

  return (
    <GradientHeading className='mb-15'>
      {data.map((text, index) => (
        <h1 key={`hero-heading-${index}`}>{text}</h1>
      ))}
    </GradientHeading>
  );
};
