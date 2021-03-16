import React from 'react';
import { Formik, Field, Form, ErrorMessage, resetForm } from 'formik';
import * as Yup from 'yup';
import { formButtonAnimation } from '../../assets/js/main.js';
import emailjs from 'emailjs-com';

export default function ContactForm(props) {
  return (
    <div className='col-lg-12'>
      {/* form title */}
      <div className='art-section-title'>
        <div className='art-title-frame'>
          <h4>{props.form.title}</h4>
        </div>
      </div>

      {/* form container */}
      <div className='art-a art-card'>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          // validation
          validationSchema={Yup.object({
            name: Yup.string().max(35, 'Must be 35 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string().max(800, 'Must be 800 characters or less').required('Required'),
          })}
          // form submit
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const contact = JSON.parse(JSON.stringify(values, null, 2));
            setTimeout(() => {
              emailjs
                .send(
                  'service_ag8htup',
                  'y3qexcs',
                  {
                    name: contact.name,
                    email: contact.email,
                    message: contact.email,
                  },
                  'user_UTJTDSxq66eaS0NGyt0PQ'
                )
                .then(
                  (result) => {
                    console.log(result.text);
                    formButtonAnimation();
                    setTimeout(() => resetForm(), 2000);
                  },
                  (error) => {
                    console.log(error.text);
                  }
                );
            }, 400);
          }}
        >
          {/* form */}
          {(formik) => (
            <Form id='form' className='art-contact-form'>
              {/* name */}
              <div className='art-form-field'>
                <Field
                  id='name'
                  name='name'
                  className={'art-input' + (formik.values.name ? ' art-active' : '')}
                  type='text'
                  placeholder='Name'
                />
                <label htmlFor='name'>
                  <i className='fas fa-user'></i>
                </label>
                <div className='art-validation-warning'>
                  <span>
                    <ErrorMessage name='name' />
                  </span>
                </div>
              </div>

              {/* email */}
              <div className='art-form-field'>
                <Field
                  id='email'
                  name='email'
                  className={'art-input' + (formik.values.email ? ' art-active' : '')}
                  type='email'
                  placeholder='Email'
                />
                <label htmlFor='email'>
                  <i className='fas fa-at'></i>
                </label>
                <div className='art-validation-warning'>
                  <span>
                    <ErrorMessage name='email' />
                  </span>
                </div>
              </div>

              {/* message */}
              <div className='art-form-field'>
                <Field
                  id='message'
                  name='message'
                  className={'art-input' + (formik.values.message ? ' art-active' : '')}
                  placeholder='Message'
                  as='textarea'
                />
                <label htmlFor='message'>
                  <i className='far fa-envelope'></i>{' '}
                </label>
                <div className='art-validation-warning art-message-validation'>
                  <span>
                    <ErrorMessage name='message' />
                  </span>
                </div>
              </div>

              {/* submit */}
              <div className='art-submit-frame'>
                <button className='art-btn art-btn-md art-submit' type='submit'>
                  <span>Send Message</span>
                </button>
                <div className='art-success'>
                  Success <i className='fas fa-check'></i>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
