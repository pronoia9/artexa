import { Link } from 'react-router-dom';
import { styled, css } from 'styled-components';
import { motion } from 'framer-motion';
import { Fancybox } from '../../components/Fancybox';

import { SplitText } from '../../components/SplitText';
import { dataStore } from '../../../store/dataStore';
import { Tooltip } from '../../../styles';
import { rem, sidebarMotion } from '../../../utils';

export const Profile = () => (
  <ProfileContainer className='art-header' {...sidebarMotion.profile.container}>
    <Avatar />
    <motion.div initial='hidden' animate='visible' {...sidebarMotion.profile.texts}>
      <Name />
      <Post />
    </motion.div>
  </ProfileContainer>
);

export const Avatar = () => {
  const data = dataStore((state) => state.sidebar.profile);
  return (
    <AvatarContainer className='art-avatar' {...sidebarMotion.profile.avatarContainer}>
      <AvatarCurtain data-fancybox='avatar' href={data.avatar} className='art-avatar-curtain'>
        <AvatarImage src={data.avatar} alt='Avatar' {...sidebarMotion.profile.avatarItem} />
        <i className='fas fa-expand' />
      </AvatarCurtain>

      <AvatarStatus className='art-lamp-light' $available={data.available} {...sidebarMotion.profile.avatarItem}>
        <AvatarStatusLight className='art-available-lamp' $available={data.available} />
      </AvatarStatus>
    </AvatarContainer>
  );
};

export const Name = () => {
  const data = dataStore((state) => state.sidebar.profile);
  return (
    <NameText className='art-name mb-10'>
      <Link to={data.nameLink}>
        <SplitText>{data.name}</SplitText>
      </Link>
    </NameText>
  );
};

export const Post = () => {
  const data = dataStore((state) => state.sidebar.profile);
  return (
    <PostContainer {...sidebarMotion.profile.posts}>
      {data.subtitle.map((line, index) => (
        <div key={`sidebar-profile-post-${index}`}>
          <SplitText speed={0.025}>{line}</SplitText>
        </div>
      ))}
    </PostContainer>
  );
};

const ProfileContainer = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: ${rem(235)};
  padding: ${rem(30)};
  text-align: center;
  background: var(--c-bg-menu-2);
  box-shadow: 0 ${rem(1)} ${rem(4)} 0 var(--c-box-shadow);
  z-index: 99999;
`;

const AvatarContainer = styled(motion.div)`
  position: relative;
  width: ${rem(90)};
  height: ${rem(90)};
  margin: 0 auto;
  border-radius: 50%;
  margin-bottom: ${rem(15)};
`;

const AvatarCurtain = styled.div`
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
    width: ${rem(30)};
    height: ${rem(30)};
    align-self: center;
    color: var(--c-font-2);
    font-size: ${rem(11)};
    font-weight: 700;
    line-height: ${rem(30)};
    text-align: center;
    background: var(--c-gradient-3);
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

const AvatarImage = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  z-index: 0;
`;

const AvatarStatus = styled(motion.div)`
  z-index: 2;

  &:before {
    content: '';
    position: absolute;
    bottom: ${rem(-1)};
    right: ${rem(1)};
    background: ${({ $available }) => ($available ? 'greenyellow' : 'red')};
    height: ${rem(23)};
    width: ${rem(23)};
    border-radius: 50%;
    animation: ${({ $available }) => ($available ? 'puls 1s infinite' : 'none')};
    opacity: ${({ $available }) => !$available && 0};
  }
`;

const AvatarStatusLight = styled(Tooltip)`
  position: absolute;
  bottom: ${rem(3)};
  right: ${rem(5)};
  height: ${rem(15)};
  width: ${rem(15)};
  background: ${({ $available }) => ($available ? 'greenyellow' : 'red')};
  border-radius: 50%;
  z-index: 0;
  transition: 0.4s ease-in-out;

  &:after {
    content: "I'm available for hire";
    position: relative;
    top: ${rem(-10)};
    left: ${rem(28)};
    width: ${rem(115)};
  }
  ${({ $available }) =>
    !$available &&
    css`
      &:after {
        content: "Sorry, I'm no longer available, but feel free to contact me.";
      }
    `}

  &:before {
    top: ${rem(5)};
    height: ${rem(5)};
    width: ${rem(5)};
    right: ${rem(-15)};
  }
`;

const NameText = styled.h3`
  a {
    color: var(--c-font-2);
    transition: 0.4s ease-in-out;

    &:hover {
      color: var(--c-accent-1);
    }
  }
`;

const PostContainer = styled(motion.div)`
  color: var(--c-font-1);
`;
