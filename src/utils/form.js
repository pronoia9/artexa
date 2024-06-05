import emailjs from '@emailjs/browser';

export const handleFormSubmit = (values, { setSubmitting, resetForm }, setSuccess) => {
  emailjs
    .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, values, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
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
