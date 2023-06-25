import { dataStore } from '../../../store/dataStore';

export const HeroButton = ({ handleClick }) => {
  const data = dataStore((state) => state.hero.button);

  return (
    <div className='art-buttons-frame'>
      <a href={data.url} className='art-btn art-btn-md' onClick={handleClick}>
        <span>{data.text}</span>
      </a>
    </div>
  );
};
