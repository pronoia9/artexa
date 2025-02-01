'use client';

import Link from 'next/link';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Button } from '@/components';
import { servicesMotion } from '@/utils';

export const PricesCard = ({ title, price, checklist, note, popular }) => {
  return (
    <motion.div className='col-lg-4' {...servicesMotion.card}>
      <Card className={`art-a art-price${popular ? ' art-popular-price' : ''}`}>
        <Wrapper className='art-price-body'>
          <motion.h5 className='mb-30' {...servicesMotion.item}>
            {title}
          </motion.h5>

          <div class='art-price-cost'>
            <div class='art-number'>
              {price.time ? (
                <>
                  <span>?</span>
                  <div>{price.cost}</div>
                  <span>{price.time}</span>
                </>
              ) : (
                <>
                  <div>{price.cost}</div>
                  <sup>*</sup>
                </>
              )}
            </div>
          </div>

          <ul class='art-price-list'>
            {checklist.map((item, i) => (
              <li key={`prices-card-${i}-${item.title}`} className={item.yes ? '' : 'art-empty-item'}>
                {item.title}
              </li>
            ))}
          </ul>

          <Link href='/contact'>
            <Button title='Order Now' {...servicesMotion.item} />
          </Link>

          {note && (
            <div class='art-asterisk'>
              <sup>*</sup>
              {note}
            </div>
          )}
        </Wrapper>
      </Card>
    </motion.div>
  );
};

const Card = styled.div``;

const Wrapper = styled.div`
  h5 {
    font-family: var(--f-primary);
  }
`;
