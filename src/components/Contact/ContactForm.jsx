import React, { useState } from 'react';
import { useFormik } from 'formik';
import submitForm from './formSubmit.js';

export default function ContactForm(props) {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='col-lg-12'>
      {/* form title */}
      <div className='art-section-title'>
        <div className='art-title-frame'>
          <h4>{props.title}</h4>
        </div>
      </div>

      {/* form */}
      <div className='art-a art-card'>
        <form id='form' className='art-contact-form' onSubmit={(e) => e.preventDefault()}>
          {/* name */}
          <div className='art-form-field'>
            <input
              id='name'
              name='name'
              className={'art-input' + (formik.values.name ? ' art-active' : '')}
              type='text'
              placeholder='Name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            <label for='message'>
              <i className='far fa-envelope'></i>
            </label>
            <div className='art-validation-warning art-message-validation'>
              {formik.touched.message && formik.errors.message ? <span>{formik.errors.message}</span> : null}
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
      </div>
    </div>
  );
}

const validate = (values) => {
  // name valiadation
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 35) {
    errors.name = 'Must be 35 characters or less';
  }

  // email validation
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // message valiadation
  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length > 500) {
    errors.message = 'Must be 500 characters or less';
  }

  return errors;
};
