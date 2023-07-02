import { Field, ErrorMessage } from 'formik';

export const ContactInput = ({ name, type, placeholder, icon, formik, as }) => {
  return (
    <div className='art-form-field'>
      <Field id={name} name={name} className={`art-input${formik.values.name ? ' art-active' : ''}`} type={type} placeholder={placeholder} as={as} />

      <label htmlFor={name}>
        <i className={icon} />
      </label>

      <div className='art-validation-warning'>
        <span>
          <ErrorMessage name={name} />
        </span>
      </div>
    </div>
  );
};
