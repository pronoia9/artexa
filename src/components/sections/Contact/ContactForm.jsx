import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { SectionTitle, ContactInput } from '../../';
import { dataStore } from '../../../store/dataStore';

export const ContactForm = () => {
  const data = dataStore((state) => state.contact.form);

  const handleSubmit = () => {};

  const formikOptions = {
    initialValues: data.default,
    validationSchema: Yup.object({
      name: Yup.string().max(35, 'Must be 35 characters or less').required('Required'),
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
              <ContactInput name='name' type='text' icon='fas fa-user' $active={formik.values.name} formik={formik} />
              <ContactInput name='subject' type='text' icon='fas fa-inbox' $active={formik.values.subject} formik={formik} />
              <ContactInput name='email' type='email' icon='fas fa-at' $active={formik.values.email} formik={formik} />
              <ContactInput name='message' type='textarea' icon='fas fa-envelope' as='textarea' $active={formik.values.message} formik={formik} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
