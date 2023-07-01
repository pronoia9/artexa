import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background: var(--c-accent-1);
  color: var(--c-font-4);
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
  border: none;
  box-shadow: 0 1px 4px 0 var(--c-box-shadow);
  transition: 0.4s ease-in-out;

  &, * {
    max-width: 200px;

    &:first-child {
      margin-bottom: 15px;
    }
  }

  &:hover {
    background-color: var(--c-accent-3);
    transform: translateY(-2px);
    color: var(--c-font-5);
  }

  * {
    margin: 0 !important;
    align-self: center;
    transition: 0.2s ease-in-out;
  }
`;

export const ButtonMedium = styled(Button)`
  height: 45px;
  font-size: 11px;
  padding: 0 35px;
`;

export const ButtonSmall = styled(Button)`
  height: 40px;
  font-size: 11px;
  padding: 0 30px;
`;

export const GradientButton = styled(ButtonMedium)`
  background: var(--c-accent-1);
  background-image: var(--c-gradient-accent-2);
  background-size: 400%;

  &, * {
    color: var(--c-font-dark);
  }
`;
