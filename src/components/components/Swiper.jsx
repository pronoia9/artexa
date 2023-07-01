import { motion } from "framer-motion";
import { styled } from "styled-components";

export const SwiperNavigation = ({ section, ...props }) => (

    <Navigation className='art-slider-navigation acc' {...props}>
      <div className='art-sn-left'>
        <div className={`swiper-pagination ${section}-swiper-pagination`} />
      </div>

      <div className='art-sn-right'>
        <NavFrame className='art-slider-nav-frame'>
          <Nav className={`art-slider-nav art-${section}-swiper-prev`} role='button' aria-label='Previous slide'>
            <i className='fas fa-chevron-left' />
          </Nav>
          <Nav className={`art-slider-nav art-${section}-swiper-next`} role='button' aria-label='Next slide'>
            <i className='fas fa-chevron-right' />
          </Nav>
        </NavFrame>
      </div>
    </Navigation>

);

const Navigation = styled(motion.div)`
  position: relative;
  width: 100%;
  padding: 15px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer !important;

  .swiper-pagination {
    position: static;
    left: 0 !important;
  }

  .swiper-pagination-bullet {
    height: 4px;
    margin-right: 10px;
    background-color: var(--c-bg-pagination);
    border-radius: 5px;
    opacity: 0.5;
    transition: 0.4s ease-in-out;

    &:focus {
      outline: inherit;
    }

    &:hover {
      background-color: var(--c-accent-4);
      transform: scale(1.1);
    }

    &.swiper-pagination-bullet-active {
      width: 20px;
      background-color: var(--c-accent-1);
      opacity: 1;
    }
  }
`;

const NavFrame = styled.div`
  display: flex;
`;

const Nav = styled.div`
  margin-left: 15px;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &.swiper-button-disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }

  &:focus {
    outline: inherit;
  }
`;
