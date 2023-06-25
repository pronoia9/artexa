import { styled } from "styled-components";

import { dataStore } from "../../../store/dataStore";
import { rem } from "../../../utils";

export const Strengths = () => {
  const data = dataStore((state) => state.sidebar.strengths);
  return (
    <div className='art-strengths p-15-15'>
      {data.map((strength, index) => (
        <StrengthItem key={`sidebar-strenghts-${index}`}>{strength}</StrengthItem>
      ))}
    </div>
  );
};

const StrengthItem = styled.div`
  margin: auto 3px 5px auto;
  padding: 3px 10px;
  display: inline-block;
  color: var(--c-font-1);
  font-size: 10px;
  background: var(--c-bg);
  border-radius: 15px;
  box-shadow: inset 0 3px 8px 0 var(--c-box-shadow);

  &:hover {
    color: var(--c-accent-3);
  }
`;