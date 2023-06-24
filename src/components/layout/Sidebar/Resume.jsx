import { dataStore } from "../../../store/dataStore";

export const Resume = () => {
  const data = dataStore((state) => state.sidebar.resume);
  return (
    <div className='art-links-frame p-15-15'>
      <a href={data.url} className='art-link art-color-link' download>
        {data.title} <i className='fas fa-download' />
      </a>
    </div>
  );
};
