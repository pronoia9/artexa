import { styled } from "styled-components";

import { dataStore } from "../../../store/dataStore";
import { rem } from "../../../utils";

export const Resume = () => {
  const data = dataStore((state) => state.sidebar.resume);
  return (
    <Container className='art-links-frame p-15-15'>
      <a href={data.url} className='art-link art-color-link' download>
        {data.title} <i className='fas fa-download' />
      </a>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;