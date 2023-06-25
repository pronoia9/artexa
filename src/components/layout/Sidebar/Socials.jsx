import { styled } from 'styled-components';

import { dataStore } from '../../../store/dataStore';

export const Socials = () => {
  const data = dataStore((state) => state.sidebar.social);
  return (
    <SocialsContainer className='art-ls-social'>
      {data.map((social, index) => (
        <SocialsItem key={`sidebar-socials-${index}`} {...social} />
      ))}
    </SocialsContainer>
  );
};

export const SocialsItem = ({ id, platform, favicon, fancybox, url }) => (
  <SocialsLink className={platform} href={url} target={!fancybox ? '_blank' : ''} rel={!fancybox ? 'noopener noreferrer' : ''} data-fancybox={fancybox}>
    <i className={favicon} />
  </SocialsLink>
);

const SocialsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.15rem;
  background: var(--c-bg-menu-2);
  box-shadow: 0 1px 4px 0 var(--c-box-shadow);
  z-index: 999;
  isolation: isolate;
`;

const SocialsLink = styled.a`
  color: var(--c-font-2);
  transition: 0.2s ease-in-out;

  &:hover {
    text-shadow: 0 0 3px var(--c-font-shadow);
    color: var(--c-accent-1);
  }

  &.social-unavailable:hover {
    color: var(--c-font-1);
  }
`;