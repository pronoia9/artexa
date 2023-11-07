'use client';

import Link from 'next/link';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Button } from '@/components';
import { servicesMotion } from '@/utils';

export const ServicesCard = ({ title, subtitle, description, link }) => {
  return (
    <motion.div className='col-lg-4 col-md-6 col-sm-12 mb-30' {...servicesMotion.card}>
      <Card className='art-a art-card art-service-icon-box'>
        <Wrapper className='art-service-ib-content'>
          <div>
            <motion.h5 className='mb-15' {...servicesMotion.item}>
              {title}
            </motion.h5>
            <motion.p {...servicesMotion.item}>{description}</motion.p>
          </div>
          <Link href='/contact'>
            <Button title='Order Now' {...servicesMotion.item} />
          </Link>
        </Wrapper>
      </Card>
    </motion.div>
  );
};

const Card = styled.div`
  height: 100%;

  h5 {
    font-family: var(--f-primary);
    min-height: 4ch;
  }

  p {
    margin: 0;
  }

  @media (max-width: 920px) {
    h5 {
      min-height: 1ch;
    }
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
`;
