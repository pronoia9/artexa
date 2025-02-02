'use client';

import { forwardRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const TestimonialCard = forwardRef(({ name, subtitle, image, description, rating }, ref) => {

  return (
    <Container ref={ref} className='art-a art-testimonial'>
      <Wrapper className='testimonial-body'>
        {image && <Image className='art-testimonial-face' {...image} />}
        <Name>{name}</Name>
        <Subtitle className='art-el-suptitle mb-15'>{subtitle}</Subtitle>
        <Description className='mb-15'>{description}</Description>
      </Wrapper>

      <Rating className='art-testimonial-footer'>
        <div className='art-left-side'>
          <ul className='art-star-rate'>
            {new Array(rating).fill().map((_, i) => (
              <li key={`testimonial-${name}-rating-${i}`}>
                <FontAwesomeIcon icon={faStar} />
              </li>
            ))}
          </ul>
        </div>
        <div className='art-right-side'></div>
      </Rating>
    </Container>
  );
});

const Container = styled.div`
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background: var(--c-bg-2);
  box-shadow: var(--c-box-shadow);
`;

const Wrapper = styled.div`
  width: 100%;
  z-index: 0;
`;

const Image = styled.img`
  width: 65px;
  height: 65px;
  position: absolute;
  top: -15px;
  right: 30px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: var(--c-box-shadow);
`;

const Name = styled.div``;

const Subtitle = styled.div``;

const Description = styled.div``;

const Rating = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
  overflow: hidden;

  .art-star-rate {
    box-shadow: inset 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    padding: 5px 15px;
    font-size: 12px;
    margin: 5px 0 0;
    background: #20202a;
    border-radius: 30px;
    display: flex;
    color: #ffc107;
  }

  li {
    list-style-type: none;
    margin-right: 5px;

    .art-empty-item {
      color: rgba(43, 43, 53, 0.98);
    }

    &:last-child {
      margin: 0;
    }
  }

  .art-testimonial-icon {
    width: 120px;
    position: absolute;
    left: 45%;
    top: 20px;
    justify-content: center;
    align-self: center;
    opacity: 0.03;
  }
`;
