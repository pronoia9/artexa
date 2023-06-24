import { dataStore } from "../../../store/dataStore";

export const Strengths = () => {
  const data = dataStore((state) => state.sidebar.strengths);
  return (
    <div className='art-strengths p-15-15'>
      {data.map((strength, index) => (
        <p key={`sidebar-strenghts-${index}`}>{strength}</p>
      ))}
    </div>
  );
};

