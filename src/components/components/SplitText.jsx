import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

export const SplitText = ({ text, children, ...props }) => {
  return <span {...props}>{text}</span>;
};
