import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Button from 'react-toolbox/lib/button/Button';
import Dropdown from 'react-toolbox/lib/dropdown/Dropdown';
import Input from 'react-toolbox/lib/input/Input';
import { Defaults, Validation } from '../../utils';

import '../../assets/react-toolbox/theme.css';
import './styles.css';

const CurrentYear = new Date().getFullYear();
const MaxAge = 120;

const FormBasics = ({ formData, onContinue, submitForm }) => (
  <Formik
    className="FormBasics"
    initialValues={formData}
    validationSchema={Validation.BasicsSchema}
    onSubmit={onContinue}
    render={({
      values,
      errors,
      touched,
      dirty,
      setFieldValue,
      setFieldTouched
    }) => {
      return (
        <form>
          <div className="FormBasics__name">
            <Input
              className="FormBasics__input"
              type="text"
              label="First name"
              value={values.firstName}
              onChange={value => setFieldValue('firstName', value)}
              onBlur={() => setFieldTouched('firstName', true)}
              error={touched.firstName && errors.firstName}
              required
            />
            <Input
              className="FormBasics__input"
              type="text"
              label="Last name"
              value={values.lastName}
              onChange={value => setFieldValue('lastName', value)}
              onBlur={() => setFieldTouched('lastName', true)}
              error={touched.lastName && errors.lastName}
              required
            />
          </div>

          <Dropdown
            className="FormBasics__input"
            label="Gender"
            value={values.gender}
            source={Defaults.genders}
            onChange={value => setFieldValue('gender', value)}
            onBlur={() => setFieldTouched('gender', true)}
            error={touched.gender && errors.gender}
            required
          />

          <Dropdown
            className="FormBasics__input"
            label="Marital status"
            value={values.maritalStatus}
            source={Defaults.maritalStatuses}
            onChange={value => setFieldValue('maritalStatus', value)}
            onBlur={() => setFieldTouched('maritalStatus', true)}
            error={touched.maritalStatus && errors.maritalStatus}
            required
          />

          <p className="FormBasics__label">Date of birth</p>
          <div className="FormBasics__dob">
            <Dropdown
              className="FormBasics__input"
              label="Month"
              value={values.dobMonth}
              source={Defaults.months}
              onChange={value => setFieldValue('dobMonth', value)}
              onBlur={() => setFieldTouched('dobMonth', true)}
              error={touched.dobMonth && errors.dobMonth}
              required
            />
            <Dropdown
              className="FormBasics__input"
              label="Day"
              value={values.dobDay}
              source={[...Array(31).keys()].map(i =>
                ({ value: i+1, label: i+1 })
              )}
              onChange={value => setFieldValue('dobDay', value)}
              onBlur={() => setFieldTouched('dobDay', true)}
              error={touched.dobDay && errors.dobDay}
              required
            />
            <Dropdown
              className="FormBasics__input"
              label="Year"
              value={values.dobYear}
              source={[...Array(MaxAge).keys()].map(i =>
                ({
                  value: i + CurrentYear - MaxAge + 1,
                  label: i + CurrentYear - MaxAge + 1
                })
              )}
              onChange={value => setFieldValue('dobYear', value)}
              onBlur={() => setFieldTouched('dobYear', true)}
              error={touched.dobYear && errors.dobYear}
              required
            />
          </div>

          <p className="FormBasics__label">Contact information</p>
          <Input
            className="FormBasics__input"
            type="text"
            label="Address"
            value={values.address}
            onChange={value => setFieldValue('address', value)}
            onBlur={() => setFieldTouched('address', true)}
            error={touched.address && errors.address}
            required
          />
          <div className="FormBasics__address2">
            <Input
              className="FormBasics__input FormBasics__city"
              type="text"
              label="City"
              value={values.city}
              onChange={value => setFieldValue('city', value)}
              onBlur={() => setFieldTouched('city', true)}
              error={touched.city && errors.city}
              required
            />
            <Dropdown
              className="FormBasics__input"
              label="State"
              value={values.state}
              source={Defaults.usStates}
              onChange={value => setFieldValue('state', value)}
              onBlur={() => setFieldTouched('state', true)}
              error={touched.state && errors.state}
              required
            />
            <Input
              className="FormBasics__input"
              type="text"
              label="Zip"
              value={values.zipcode}
              onChange={value => setFieldValue('zipcode', value.trim())}
              onBlur={() => setFieldTouched('zipcode', true)}
              error={touched.zipcode && errors.zipcode}
              required
            />
          </div>

          <Input
            className="FormBasics__input"
            type="tel"
            label="Phone (000)000-0000"
            value={values.phone}
            onChange={value => setFieldValue('phone', value.trim())}
            onBlur={() => setFieldTouched('phone', true)}
            error={touched.phone && errors.phone}
            required
          />

          <Button
            label={submitForm ? 'Submit' : 'Continue'}
            onClick={() => onContinue(values)}
            disabled={
              !dirty
              || errors.firstName
              || errors.lastName
              || errors.gender
              || errors.maritalStatus
              || errors.dobDay
              || errors.dobMonth
              || errors.dobYear
              || errors.address
              || errors.city
              || errors.state
              || errors.zipcode
              || errors.phone ? true : false
            }
            raised
          />
        </form>
      );
    }}
  />
);

FormBasics.propTypes = {
  formData: PropTypes.object,
  onContinue: PropTypes.func,
  submitForm: PropTypes.bool
};

export default FormBasics;
