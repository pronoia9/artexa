'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Logos = ({ logos }) => (
  <motion.div className='container-fluid'>
    <div className='row'>
      {logos.map((logo, index) => (
        <Logo key={`${index}-logo`} image={logo} />
      ))}
    </div>
  </motion.div>
);

export const Logo = ({ image }) => (
  <motion.div className='col-6 col-lg-3'>
    <Brand className='art-brand' src={image} alt='warning' />
  </motion.div>
);

const Brand = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 1.5rem;
  display: block;
  margin-bottom: 30px;
  opacity: 0.6;
  transition: 0.4s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;