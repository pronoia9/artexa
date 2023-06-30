import { motion } from "framer-motion";
import { styled } from "styled-components";

export const SwiperNavigation = ({ section, ...props }) => (
  <motion.div className='col-lg-12 p-0-30 acl' {...props}>
    <Navigation className='art-slider-navigation'>
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
  </motion.div>
);

const Navigation = styled.div`
  padding: 15px 0 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer !important;

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
