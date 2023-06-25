import { styled } from 'styled-components';

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <Container className='container-fluid' id={idName}>
        <Component {...props} />
      </Container>
    );
  };
export default SectionWrapper;

const Container = styled.section`
  overflow: hidden;
  padding: 0 30px;
  position: relative;

  @media (max-width: 920px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
