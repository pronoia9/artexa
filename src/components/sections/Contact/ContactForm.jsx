import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { SectionTitle, ContactInput } from '../../';
import { dataStore } from '../../../store/dataStore';
import { GradientButton } from '../../../styles';
import { styled } from 'styled-components';

export const ContactForm = () => {
  const data = dataStore((state) => state.contact.form);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {};

  const formikOptions = {
    initialValues: data.default,
    validationSchema: Yup.object({
      name: Yup.string().max(35, 'Must be 35 characters or less').required('Required'),
      subject: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().max(800, 'Must be 800 characters or less').required('Required'),
    }),
    onSubmit: handleSubmit,
  };

  return (
    <div className='col-lg-12'>
      <SectionTitle title={data.title} />

      <div className='art-a art-card'>
        <Formik {...formikOptions}>
          {(formik) => (
            <Form id='form' className='art-contact-form'>
              <ContactInput name='name' type='text' icon='fas fa-user' active={formik.values.name} />
              <ContactInput name='subject' type='text' icon='fas fa-inbox' active={formik.values.subject} />
              <ContactInput name='email' type='email' icon='fas fa-at' active={formik.values.email} />
              <ContactInput name='message' type='textarea' icon='fas fa-envelope' as='textarea' active={formik.values.message} />

              <ButtonContainer className='art-submit-frame'>
                <GradientButton className='art-submit' type='submit'>
                  <span>Send Message</span>
                </GradientButton>
                <div className='art-success'>
                  Success <i className='fas fa-check' />
                </div>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const ButtonContainer = styled.div`
  position: relative;
  height: 45px;
  /* margin-top: 5px; */

  button {
    float: right;
  }

  .art-submit {
    position: relative;
    margin: 0;
    overflow: hidden;
    z-index: 999;

    &:focus {
      outline: inherit;
    }
  }

  .art-success {
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    margin: 0;
    margin-top: -15px;
    padding: 15px 35px 0;
    max-width: 150px;
    justify-content: center;
    align-content: center;
    color: var(--c-font-2);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: var(--c-font-4);
    border: none;
    overflow: hidden;
    transform: scale(0);
  }
`;
