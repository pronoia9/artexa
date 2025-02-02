'use client';

import Link from 'next/link';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

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

          <Cost className='art-price-cost'>
            <div className='art-number'>
              {price.time ? (
                <>
                  <span>$</span>
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
          </Cost>

          <PriceList className='art-price-list'>
            {checklist.map((item, i) => (
              <li key={`prices-card-${i}-${item.title}`} className={item.check ? '' : ' art-empty-item'}>
                <FontAwesomeIcon icon={item.check ? faCheck : faXmark} />
                {item.title}
              </li>
            ))}
          </PriceList>

          <Link href='/contact'>
            <Button title='Order Now' {...servicesMotion.item} />
          </Link>

          {note && (
            <Note className='art-asterisk'>
              <sup>*</sup>
              {note}
            </Note>
          )}
        </Wrapper>
      </Card>
    </motion.div>
  );
};

const Card = styled.div`
  h5 {
    font-family: var(--f-primary) !important;
  }

  margin-bottom: 30px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background: var(--c-bg-2);
  box-shadow: var(--c-box-shadow);
  text-align: center;
  transition: 0.55s ease-in-out;

  &.art-popular-price {
    transform: scale(1.03);

    &:before {
      content: 'POPULAR';
      width: 200px;
      padding: 2px;
      position: absolute;
      top: 18px;
      right: -72px;
      z-index: 99;
      box-shadow: var(--c-box-shadow);
      font-size: 12px;
      font-weight: 600;
      color: var(--c-font-dark);
      text-align: center;
      background: var(--c-accent-1);
      transform: rotate(45deg);
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  padding: 30px;

  .art-link {
    margin: 0;
  }
`;

const Cost = styled.div`
  padding: 0 10px;
  margin-bottom: 30px;
  position: relative;
  display: inline-flex;
  justify-content: center;

  .art-number {
    font-size: 32px;
    font-weight: 600;
    color: var(--c-accent-1);
    margin-bottom: 0;

    span {
      padding: 0 5px;
      font-size: 13px;
      font-weight: 200;
      color: var(--c-font-2);
      opacity: 1;
    }

    div {
      display: inline;
    }

    sup {
      position: absolute;
      top: 15px;
      right: 0;
      font-size: 14px;
      opacity: 0.6;
    }
  }
`;

const PriceList = styled.ul`
  padding: 0;
  margin: 0 0 30px;

  li {
    list-style-type: none;
    margin-bottom: 15px;

    &.art-empty-item {
      opacity: 0.3;
    }

    svg {
      width: 12px;
      height: 12px;
      margin-right: 5px;
      color: var(--c-accent-1);
      font-weight: 900;
    }
  }
`;

const Note = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 10px;
  font-size: 8px;
  text-align: center;
  opacity: 0.4;
`;
