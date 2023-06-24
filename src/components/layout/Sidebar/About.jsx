import { dataStore } from '../../../store/dataStore';

export const About = () => {
  const data = dataStore((state) => state.sidebar.about);

  return (
    <div className='art-table p-15-15'>
      <ul>
        {data.map((item) => (
          <AboutItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export const AboutItem = ({ title, subtitle }) => {
  return (
    <li>
      <h6>{title}</h6>
      <span>{subtitle}</span>
    </li>
  );
};
