'use client';

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
    <img className='art-brand' src={image} alt='warning' />
  </motion.div>
);
