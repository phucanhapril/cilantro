import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';
import { Validation } from '../../utils';

import '../../assets/react-toolbox/theme.css';
import './styles.css';

class FormEmail extends Component {
  render() {
    const { formData, onContinue, submitForm } = this.props;
    return (
      <Formik
        className="FormEmail"
        initialValues={formData}
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
          <form>
            <Input
              className="FormEmail__input"
              type="email"
              label="Enter your email address to begin"
              value={values.email}
              onChange={value => setFieldValue('email', value)}
              onBlur={() => setFieldTouched('email', true)}
              error={touched.email && errors.email}
              required
            />
            <Button
              label={submitForm ? 'Submit' : 'Continue'}
              onClick={onContinue}
              disabled={!dirty || (errors.email ? true : false)}
              raised
            />
          </form>
        )}
      />
    );
  }
}

FormEmail.propTypes = {
  formData: PropTypes.object,
  onContinue: PropTypes.func,
  submitForm: PropTypes.bool
};

export default FormEmail;
