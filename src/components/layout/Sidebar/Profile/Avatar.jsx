import { dataStore } from '../../../../store/dataStore';

const Avatar = () => {
  const data = dataStore((state) => state.sidebar.profile);

  return (
    <div className='art-avatar'>
      <a data-fancybox='avatar' href={data.avatar} className='art-avatar-curtain'>
        <img src={data.avatar} alt='Avatar' />
        <i className='fas fa-expand' />
      </a>
      {/* availability: change class 'art-not-available' if not available */}
      <div className={`art-lamp-light${data.available ? '' : ' art-not-available'}`}>
        <div className='art-available-lamp' />
      </div>
    </div>
  );
};
export default Avatar;
