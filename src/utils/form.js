'use client';

import emailjs from '@emailjs/browser';

export const handleFormSubmit = (values, { setSubmitting, resetForm }, setSuccess) => {
  emailjs.init({ publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, });

  emailjs
    .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, values, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    .then(
      (result) => {
        setSuccess(true);
        setTimeout(() => {
          resetForm();
          setSuccess(false);
        }, 5000);
      },
      (error) => {
        console.log('Error sending message.', error.text);
      }
    );
};
