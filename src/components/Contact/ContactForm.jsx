import React, { useState } from 'react';
import submit from './formSubmit.js';

export default function ContactForm(props) {
  // store the values for value and onchange
  // active is used to keep the fields that have input lit up (css)
  // the css effect works on focus, as well as if theres input in the field
  const [form, setForm] = useState({
    name: { value: '', active: false },
    email: { value: '', active: false },
    text: { value: '', active: false },
  });
  const [success, setSuccess] = useState(false);

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
              className={'art-input' + (form.name.active ? ' art-active' : '')}
              type='text'
              placeholder='Name'
              value={form.name.value}
              required
              onChange={(e) =>
                setForm({ ...form, name: { value: e.target.value, active: e.target.value ? true : false } })
              }
            ></input>
            <label for='name'>
              <i className='fas fa-user'></i>
            </label>
          </div>

          {/* email */}
          <div className='art-form-field'>
            <input
              id='email'
              name='email'
              className={'art-input' + (form.email.active ? ' art-active' : '')}
              type='email'
              placeholder='Email'
              value={form.email.value}
              required
              onChange={(e) =>
                setForm({
                  ...form,
                  email: { value: e.target.value, active: e.target.value ? true : false },
                })
              }
            ></input>
            <label for='email'>
              <i className='fas fa-at'></i>
            </label>
          </div>

          {/* message */}
          <div className='art-form-field'>
            <textarea
              id='message'
              name='text'
              className={'art-input' + (form.text.active ? ' art-active' : '')}
              placeholder='Message'
              value={form.text.value}
              required
              onChange={(e) =>
                setForm({ ...form, text: { value: e.target.value, active: e.target.value ? true : false } })
              }
            ></textarea>
            <label for='message'>
              <i className='far fa-envelope'></i>
            </label>
          </div>

          {/* submit */}
          <div className='art-submit-frame'>
            <button
              className='art-btn art-btn-md art-submit'
              type='submit'
              onClick={() => setSuccess(submit(form))}
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
