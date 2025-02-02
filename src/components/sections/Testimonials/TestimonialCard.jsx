'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const TestimonialCard = ({ name, subtitle, image, description, rating }) => {
  const img = image || { src: '', alt: '' };

  return (
    <Container className='art-a art-testimonial'>
      <Wrapper className='testimonial-body'>
        <Image className='art-testimonial-face' {...img} />
        <Name>{name}</Name>
        <Subtitle className='art-el-suptitle mb-15'>{subtitle}</Subtitle>
        <Description className='mb-15'>{description}</Description>
      </Wrapper>

      <Rating className='art-testimonial-footer'>
        <div className='art-left-side'>
          <ul className='art-star-rate'>
            {new Array(rating).fill().map((r, i) => (
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
};

const Container = styled.div``;

const Wrapper = styled.div``;

const Image = styled.img``;

const Name = styled.div``;

const Subtitle = styled.div``;

const Description = styled.div``;

const Rating = styled.div``;
