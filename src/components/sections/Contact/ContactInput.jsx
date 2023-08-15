'use client';

import { Field, ErrorMessage } from 'formik';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { contactMotion } from '@/utils';
import { SVGs } from '@/components';

export const ContactInput = ({ name, icon, active, ...props }) => {
  return (
    <Container className='art-form-field' {...contactMotion.input}>
      <Field
        id={name}
        name={name}
        className={`art-input${active ? ' art-active' : ''}`}
        placeholder={`${name[0].toUpperCase()}${name.substring(1)}`}
        {...props}
      />

      <Label htmlFor={name}>
        <SVGs type={icon} height={11} />
      </Label>

      <Validation className='art-validation-warning'>
        <span>
          <ErrorMessage name={name} />
        </span>
      </Validation>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 0;

  input,
  textarea {
    height: 50px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    background: ${({ theme }) => theme.bgInput};
    color: var(--c-font-2);
    border: none;
    border-left: solid 50px #20202a;
    box-shadow: inset 0 1px 4px 0 rgba(15, 15, 20, 0.1);
    transition: 0.4s ease-in-out;

    &:focus {
      outline: none;

      &,
      &.art-active {
        border-color: var(--c-accent-1);
      }
    }
  }

  textarea {
    padding-top: 15px;
    height: 150px;

    & + label {
      height: 150px;
      margin-bottom: 0;
    }
  }

  .art-input {
    &.art-active + label, &:focus + label {
      background: var(--c-accent-1);
      /* color: var(--c-font-dark); */

      svg {
        fill: var(--c-font-dark);
      }
    }
  }

  ::placeholder {
    color: var(--c-font-1);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  height: 50px;
  left: 0;
  width: 50px;
  padding: 0 15px;
  /* color: var(--c-font-1); */
  /* font-size: 11px; */
  /* font-weight: 500; */
  line-height: 50px;
  /* letter-spacing: 1px; */
  text-align: center;
  /* text-transform: uppercase; */
  background: ${({ theme }) => theme.bgInputLabel};
  cursor: text;
  
  &, svg {
    transition: 0.4s ease-in-out;
  }

  svg {
    fill: var(--c-font-1);
  }
`;

const Validation = styled.div`
  height: 30px;
  padding: 7px;
  /* text-align: center; */

  &.art-message-validation {
    padding-top: 1px;
  }

  &, span {
    color: var(--c-accent-5);
    margin-left: 30px;
  }
`;
