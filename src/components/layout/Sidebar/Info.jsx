import { dataStore } from '../../../store/dataStore';

export const Info = () => {
  const data = dataStore((state) => state.sidebar.about);

  return (
    <div className='art-table p-15-15'>
      <ul>
        {data.map((item) => (
          <InfoItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export const InfoItem = ({ title, subtitle }) => {
  return (
    <li>
      <h6>{title}</h6>
      <span>{subtitle}</span>
    </li>
  );
};
