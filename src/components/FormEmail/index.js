import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';
import { Validation } from '../../utils';

import './styles.css';

const FormEmail = ({ formData, onContinue, submitForm }) => (
  <Formik
    className="FormEmail"
    initialValues={{ email: formData.email || '' }}
    validationSchema={Validation.EmailSchema}
    onSubmit={onContinue}
    render={({
      values,
      errors,
      touched,
      dirty,
      setFieldValue,
      setFieldTouched
    }) => (
      <form className="FormEmail__form">
        <Input
          className="FormEmail__input"
          type="email"
          label="Enter your email address to begin"
          value={values.email}
          onChange={value => setFieldValue('email', value.trim())}
          onBlur={() => setFieldTouched('email', true)}
          error={touched.email && errors.email}
          required
        />
        <Button
          label={submitForm ? 'Submit' : 'Continue'}
          onClick={() => onContinue(values)}
          disabled={!dirty || (errors.email ? true : false)}
          raised
        />
      </form>
    )}
  />
);

FormEmail.propTypes = {
  formData: PropTypes.object,
  onContinue: PropTypes.func,
  submitForm: PropTypes.bool
};

export default FormEmail;
