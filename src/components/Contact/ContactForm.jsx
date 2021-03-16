import React from 'react';
import { Formik } from 'formik';
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
            <form id='form' className='art-contact-form' onSubmit={(e) => e.preventDefault()}>
              {/* name */}
              <div className='art-form-field'>
                <input
                  id='name'
                  name='name'
                  className={'art-input' + (formik.values.name ? ' art-active' : '')}
                  type='text'
                  placeholder='Name'
                  {...formik.getFieldProps('name')}
                ></input>
                <label for='name'>
                  <i className='fas fa-user'></i>
                </label>
                <div className='art-validation-warning'>
                  {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span> : null}
                </div>
              </div>

              {/* email */}
              <div className='art-form-field'>
                <input
                  id='email'
                  name='email'
                  className={'art-input' + (formik.values.email ? ' art-active' : '')}
                  type='email'
                  placeholder='Email'
                  {...formik.getFieldProps('email')}
                ></input>
                <label for='email'>
                  <i className='fas fa-at'></i>
                </label>
                <div className='art-validation-warning'>
                  {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}
                </div>
              </div>

              {/* message */}
              <div className='art-form-field'>
                <textarea
                  id='message'
                  name='message'
                  className={'art-input' + (formik.values.message ? ' art-active' : '')}
                  placeholder='Message'
                  {...formik.getFieldProps('message')}
                ></textarea>
                <label for='message'>
                  <i className='far fa-envelope'></i>
                </label>
                <div className='art-validation-warning art-message-validation'>
                  {formik.touched.message && formik.errors.message ? (
                    <span>{formik.errors.message}</span>
                  ) : null}
                </div>
              </div>

              {/* submit */}
              <div className='art-submit-frame'>
                <button
                  className='art-btn art-btn-md art-submit'
                  type='submit'
                  onClick={() => formik.handleSubmit()}
                >
                  <span>Send Message</span>
                </button>
                <div className='art-success'>
                  Success <i className='fas fa-check'></i>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
