import { styled } from 'styled-components';

import { Logos } from '@/components';
import { SectionWrapper } from '@/hoc';
import { dataStore } from '@/utils';

const Footer = () => {
  const data = dataStore((state) => state.footer);

  return (
    <>
      <Logos logos={data.logos} />
      <FooterContainer>
        <div>{data.text[0]}</div>
        <div>{data.text[1]}</div>
      </FooterContainer>
    </>
  );
};
export default SectionWrapper(Footer, 'footer');

const FooterContainer = styled.div`
  width: 100%;
  padding: 17px 30px 7px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: var(--c-font-1);
  font-family: var(--f-tertiary);
  background: var(--c-bg-menu-2);
  box-shadow: 0 1px 4px 0 var(--c-box-shadow);
  z-index: 9;
  transition: 0.55s ease-in-out;

  div {
    margin-bottom: 10px;
  }

  a {
    transition: 0.2s ease-in-out;

    &:hover {
      color: var(--c-font-2);
    }
  }
`;