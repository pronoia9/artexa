import { dataStore } from '../../../store/dataStore';

export const HeroHeading = () => {
  const data = dataStore((state) => state.hero.heading);

  return (
    <h1 className='mb-15'>
      {data.map((text, index) => (
        <div key={`hero-heading-${index}`}>{text}</div>
      ))}
    </h1>
  );
};
