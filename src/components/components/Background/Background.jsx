import { styled } from 'styled-components';
import { Shader } from './Shader';

export const Background = () => (
  <Container className='art-top-bg'>
    <Shader />
    <Overlay className='art-top-bg-overlay' />
  </Container>
);

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const Overlay = styled(Container)`
  left: 0;
  background: var(--c-bg-background-overlay);
`;
