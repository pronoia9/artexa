import { dataStore } from '../../../../store/dataStore';

const Name = () => {
  const data = dataStore((state) => state.sidebar.profile);

  return (
    <h5 className='art-name mb-10'>
      <a href='/'>{data.name}</a>
    </h5>
  );
};
export default Name;
