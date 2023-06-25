import { styled } from 'styled-components';
import { Shader } from './Shader';

export const Background = () => (
  <Container className='art-top-bg' style={{ backgroundImage: `url()` }}>
    <Shader />
    <Overlay className='art-top-bg-overlay' />
  </Container>
);

const Container = styled.div``;

const Overlay = styled.div``;
