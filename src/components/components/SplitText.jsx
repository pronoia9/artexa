import { motion } from 'framer-motion';

import { textType } from '../../utils';

export const SplitText = ({ speed, children }) => {
  return (
    <motion.span className='split-text' {...textType.text(speed)}>
      {`${children}`.split('').map((char, index) => (
        <motion.span key={`split-text-${children}-${index}-${char}`} {...textType.char}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};
