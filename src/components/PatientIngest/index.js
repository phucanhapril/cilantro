import React, { Component } from 'react';
import FormEmail from '../FormEmail';
import FormBasics from '../FormBasics';
import FormMedicalHistory from '../FormMedicalHistory';
import FormFamilyHistory from '../FormFamilyHistory';
import FormTerms from '../FormTerms';
import FormSummary from '../FormSummary';
import ProgressSidebar from '../ProgressSidebar';

import '../../assets/react-toolbox/theme.css';
import './styles.css';

const PatientIngestSteps = [
  'Email',
  'Basics',
  'Medical History',
  'Family History',
  'Terms',
  'Summary'
];

class PatientIngest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        maritalStatus: '',
        dobDay: '',
        dobMonth: '',
        dobYear: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        phone: '',
        conditions: [],
        medications: [],
        allergies: [],
        operations: [],
        familyConditions: {},
        acceptTerms: false
      },
      step: 0
    };
  }

  handleContinue = values => this.setState({
    formData: { ...this.state.formData, ...values },
    step: this.state.step + 1
  });
  handleSubmit = values => console.log('payload:', values);

  render() {
    const { formData, step } = this.state;
    return (
      <div className="PatientIngest">
        <div className="PatientIngest__sidebar">
          <ProgressSidebar step={step} steps={PatientIngestSteps} />
        </div>
        <div className="PatientIngest__form">
          {step === 0 && (
            <FormEmail
              formData={formData}
              onContinue={this.handleContinue}
            />
          )}
          {step === 1 && (
            <FormBasics
              formData={formData}
              onContinue={this.handleContinue}
            />
          )}
          {step === 2 && (
            <FormMedicalHistory
              formData={formData}
              onContinue={this.handleContinue}
            />
          )}
          {step === 3 && (
            <FormFamilyHistory
              formData={formData}
              onContinue={this.handleContinue}
            />
          )}
          {step === 4 && (
            <FormTerms
              formData={formData}
              onContinue={this.handleContinue}
            />
          )}
          {step === 5 && (
            <FormSummary
              formData={formData}
              onContinue={this.handleSubmit}
              submitForm={true}
            />
          )}
        </div>
      </div>
    );
  }
}

export default PatientIngest;
