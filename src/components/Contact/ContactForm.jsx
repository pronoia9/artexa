import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { formButtonAnimation } from '../../assets/js/main.js';

export default function ContactForm(props) {
  return (
    <div className='col-lg-12'>
      {/* form title */}
      <div className='art-section-title'>
        <div className='art-title-frame'>
          <h4>{props.title}</h4>
        </div>
      </div>

      {/* form container */}
      <div className='art-a art-card'>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={Yup.object({
            name: Yup.string().max(35, 'Must be 35 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string().max(500, 'Must be 500 characters or less').required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            // TODO: add post and remove alert
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
            formButtonAnimation();
          }}
        >
          {/* form */}
          {(formik) => (
            <Form>
              {/* name */}
              <div className='art-form-field'>
                <Field
                  id='name'
                  name='name'
                  className={'art-input' + (formik.values.name ? ' art-active' : '')}
                  type='text'
                  placeholder='Name'
                />
                <label for='name'>
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
                <label for='email'>
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
                <label for='message'>
                  <i className='far fa-envelope'></i>
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
