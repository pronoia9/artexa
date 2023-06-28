import { styled } from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-content: center;
  background: var(--c-accent-1);
  color: var(--c-font-4);
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: none;
  box-shadow: 0 1px 4px 0 var(--c-box-shadow);
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: var(--c-accent-3);
    transform: translateY(-2px);
    color: var(--c-font-5);
  }

  * {
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
  background: none;
  background-image: var(--c-gradient-accent-2);
`;
