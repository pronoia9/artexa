import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { ProfileAvatar, ProfileName, ProfilePost } from '@/layout';
import { rem, sidebarMotion } from '@/utils';

export const Profile = () => (
  <ProfileContainer className='art-header' {...sidebarMotion.profile.container}>
    <ProfileAvatar />
    <motion.div initial='hidden' animate='visible' {...sidebarMotion.profile.texts}>
      <ProfileName />
      <ProfilePost />
    </motion.div>
  </ProfileContainer>
);

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
