'use client';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

import { Logos, SectionWrapper } from '@/components';
import { footer as data, sectionWrapperMotion } from '@/utils';

// TODO: Fix this HOC component export shit
// export default SectionWrapper(
//   () => (
//     <>
//       <Logos logos={data.logos} />
//       <FooterContainer>
//         <div>{data.text[0]}</div>
//         <div>{data.text[1]}</div>
//       </FooterContainer>
//     </>
//   ),
//   'footer'
// );

export default function Footer() {
  return (
    <Container className='container-fluid' {...sectionWrapperMotion()}>
      <div className='row p-30-0'>
        <Logos logos={data.logos} />
        <FooterContainer>
          <span>{data.text[0]}</span>
          <span>{data.text[1]}</span>
        </FooterContainer>
      </div>
    </Container>
  );
}

const Container = styled(motion.section)`
  position: relative;
  padding: 0 30px;
  overflow: hidden;

  @media (max-width: 920px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  padding: 14px 30px;
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

  a, span {
    transition: 0.2s ease-in-out;

    &:hover {
      color: var(--c-font-2);
    }
  }
`;
