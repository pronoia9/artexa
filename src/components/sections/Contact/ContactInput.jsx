import { Field, ErrorMessage } from 'formik';
import { styled } from 'styled-components';

export const ContactInput = ({ name, type, placeholder, icon, active, as }) => {
  return (
    <Container className='art-form-field'>
      <Input id={name} name={name} className={`art-input${active ? ' art-active' : ''}`} type={type} placeholder={placeholder} as={as} />

      <Label htmlFor={name}>
        <i className={icon} />
      </Label>

      <Validation className='art-validation-warning'>
        <span>
          <ErrorMessage name={name} />
        </span>
      </Validation>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-bottom: 0;

  textarea {
    padding-top: 15px;
    height: 150px;

    & + label {
      height: 150px;
      margin-bottom: 0;
    }
  }

  .art-input {
    &.art-active + label,
    &:focus + label {
      background: var(--c-accent-1);
      color: var(--c-font-dark);
    }
  }

  ::placeholder {
    color: var(--c-font-3);
  }
`;

const Input = styled(Field)`
  height: 50px;
  width: 100%;
  margin-bottom: 0;
  padding-left: 15px;
  padding-right: 15px;
  background: var(--c-bg-input);
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
`;

const Label = styled.label`
  text-align: center;
  color: var(--c-font-1);
  position: absolute;
  height: 50px;
  width: 50px;
  background: var(--c-bg-input-label);
  top: 0;
  left: 0;
  padding: 0 15px;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 50px;
  letter-spacing: 1px;
  font-weight: 500;
  transition: 0.4s ease-in-out;
  cursor: text;
`;

const Validation = styled.div`
  height: 30px;
  padding: 7px;
  /* text-align: center; */

  &.art-message-validation {
    padding-top: 1px;
  }

  span {
    color: var(--c-accent-5);
    margin-left: 50px;
  }
`;
