import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SplitText } from '../../../components/SplitText';
import { dataStore } from '../../../../store/dataStore';
import { sidebarMotion } from '../../../../utils';

export const ProfilePost = () => {
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

const PostContainer = styled(motion.div)`
  color: var(--c-font-1);
`;
