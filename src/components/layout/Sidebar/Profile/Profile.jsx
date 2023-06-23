import { styled } from 'styled-components';
import { Avatar, Name, Post } from '.';

const Profile = () => {
  return (
    <Container className='art-header'>
      <Avatar />
      <Name />
      <Post />
    </Container>
  );
};
export default Profile;

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99999;
  width: 100%;
  padding: 30px;
  height: 235px;
  background: var(--c-gradient-2);
  text-align: center;
  box-shadow: 0 1px 4px 0 var(--c-box-shadow);
`;