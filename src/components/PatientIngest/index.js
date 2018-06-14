import React, { Component } from 'react';
import { Formik } from 'formik';
import Button from 'react-toolbox/lib/button/Button';
import { Validation } from '../../utils';

import FormEmail from '../FormEmail';
import FormBasics from '../FormBasics';
import FormMedicalHistory from '../FormMedicalHistory';
import FormFamilyHistory from '../FormFamilyHistory';
import FormTerms from '../FormTerms';
import FormSummary from '../FormSummary';
import ProgressSidebar from '../ProgressSidebar';

import '../../assets/react-toolbox/theme.css';
import './styles.css';

class PatientIngest extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 0 };
  }

  handleValidation = values => Validation.validatePatientIngest(values);
  handleContinue = () => this.setState({ step: this.state.step + 1 });
  handleSubmit = values => console.log('payload:', values);

  steps = [
    'Email',
    'Basics',
    'Medical History',
    'Family History',
    'Terms',
    'Summary'
  ];

  render() {
    const { step } = this.state;
    const initialFormValues = {
      email: ''
    };
    return (
      <div className="PatientIngest">
        <div className="PatientIngest__sidebar">
          <ProgressSidebar step={step} steps={this.steps} />
        </div>
        <div className="PatientIngest__form">
          <Formik
            initialValues={initialFormValues}
            validate={this.handleValidation}
            onSubmit={this.handleSubmit}
            render={({ values, errors, touched, setFieldValue, setFieldTouched }) => (
              <form>
                {step === 0 && (
                  <FormEmail
                    value={values.email}
                    error={touched.email && errors.email}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    onContinue={this.handleContinue}
                    canContinue={touched.email && !errors.email}
                  />
                )}
                {step === 1 && (
                  <FormBasics />
                )}
                {step === 2 && (
                  <FormMedicalHistory />
                )}
                {step === 3 && (
                  <FormFamilyHistory />
                )}
                {step === 4 && (
                  <FormTerms />
                )}
                {step === 5 && (
                  <div className="PatientIngest__submit-page">
                    <FormSummary />
                    <Button
                      label="Submit"
                      onClick={this.handleSubmit(values)}
                      raised
                    />
                  </div>
                )}
              </form>
            )}
          />
        </div>
      </div>
    );
  }
}

export default PatientIngest;
