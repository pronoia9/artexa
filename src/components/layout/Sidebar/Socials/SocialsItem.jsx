import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { sidebarMotion } from '../../../../utils';

export const SocialsItem = ({ id, platform, favicon, fancybox, url, index }) => (
  <Container
    className={platform}
    href={url}
    target={!fancybox ? '_blank' : ''}
    rel={!fancybox ? 'noopener noreferrer' : ''}
    {...sidebarMotion.socials.item}
  >
    <i className={favicon} />
  </Container>
);

const Container = styled(motion.a)`
  color: var(--c-font-1);
  transition: 0.2s ease-in-out;

  &:hover {
    text-shadow: 0 0 3px var(--c-font-shadow);
    color: var(--c-accent-1);
  }

  &.social-unavailable:hover {
    color: var(--c-font-2);
  }
`;
