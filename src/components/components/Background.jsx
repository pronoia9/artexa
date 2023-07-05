import { styled } from 'styled-components';

import { dataStore } from '../../store/dataStore';

export const Background = () => {
  const { accent } = dataStore((state) => ({ accent: state.accent }));

  return (
    <Container className='art-top-bg' $accent={accent}>
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
  background: ${({ $accent = 'pastels' }) => `url('src/assets/hero/bg-${$accent}.jpg')`};
  background-position: center;
  background-size: cover;
`;

const Overlay = styled(Container)`
  left: 0;
  background: ${({ theme }) => theme.bgBackgroundOverlay};
`;
