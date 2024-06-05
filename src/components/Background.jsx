'use client';

import { styled } from 'styled-components';

export const Background = () => {
  return (
    <Container className='art-top-bg'>
      <Overlay className='art-top-bg-overlay' />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: ${({ theme }) => `url(/images/background/${theme.colorCode}-${theme.themeCode}.jpg)`};
  background-position: center;
  background-size: cover;
`;

const Overlay = styled(Container)`
  left: 0;
  background: ${({ theme }) => theme.bgBackgroundOverlay};
`;
