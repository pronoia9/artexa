import { styled, css } from 'styled-components';
import { dataStore } from '../../../../store/dataStore';

const Avatar = () => {
  const data = dataStore((state) => state.sidebar.profile);

  return (
    <Container className='art-avatar'>
      <Curtain data-fancybox='avatar' href={data.avatar} className='art-avatar-curtain'>
        <Image src={data.avatar} alt='Avatar' />
        <i className='fas fa-expand' />
      </Curtain>

      <Status className='art-lamp-light' available={`${data.available}`}>
        <StatusLight className='art-available-lamp' available={`${data.available}`} />
      </Status>
    </Container>
  );
};
export default Avatar;

const Container = styled.div`
  width: 90px;
  height: 90px;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  margin-bottom: 15px;
`;

const Curtain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  outline: inherit;
  transition: 0.2s ease-in-out;
  z-index: 0;

  i {
    background: var(--c-gradient-3);
    width: 30px;
    height: 30px;
    text-align: center;
    align-self: center;
    font-weight: 700;
    font-size: 11px;
    line-height: 30px;
    color: var(--c-font-1);
    border-radius: 50%;
    opacity: 0;
    z-index: 1;
    transition: 0.4s ease-in-out;
  }

  &:hover {
    opacity: 1;
    transition: 0.2s ease-in-out;
    outline: inherit;

    i {
      opacity: 0.7;

      &:hover {
        opacity: 1;
        transform: scale(1.07);
      }
    }
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  z-index: 0;
`;

const Status = styled.div`
  z-index: 2;

  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    right: 1px;
    background: var(--c-font-1);
    height: 23px;
    width: 23px;
    border-radius: 50%;
    animation: ${({ available }) => (available === 'true' ? 'puls 1s infinite' : 'none')};
    opacity: ${({ available }) => (available !== 'true' && 0)};
  }
`;

const StatusLight = styled.div`
  position: absolute;
  bottom: 3px;
  right: 5px;
  height: 15px;
  width: 15px;
  background: ${({ available }) => (available === 'true' ? 'greenyellow' : 'red')};
  border-radius: 50%;
  z-index: 0;
  transition: 0.4s ease-in-out;

  &:after {
    position: relative;
    content: "I'm available for hire";
    width: 115px;
    display: block;
    padding: 5px 10px;
    top: -10px;
    left: 28px;
    font-size: 10px;
    font-weight: 200;
    color: var(--c-font-2);
    box-shadow: 0 1px 4px 0 var(--c-box-shadow);
    background: var(--c-background-1);
    opacity: 0;
    pointer-events: none;
    transform: translateX(20px);
    transition: 0.4s ease-in-out;
    text-align: left;
  }
  ${({ available }) =>
    available !== 'true' &&
    css`
      &:after {
        content: "Sorry, I'm no longer available, but feel free to contact me.";
      }
    `}

  &:before {
    content: '';
    position: absolute;
    height: 5px;
    width: 5px;
    right: -15px;
    top: 5px;
    opacity: 0;
    background: var(--c-background-1);
    pointer-events: none;
    transform: translateX(20px) rotate(45deg);
    transition: 0.4s ease-in-out;
    z-index: 99;
    animation: none !important;
  }

  &:hover {
    transform: scale(1);

    &:after {
      opacity: 1;
      transform: translateX(0);
    }

    &:before {
      opacity: 1;
      transform: translateX(0) rotate(45deg);
    }
  }
`;
