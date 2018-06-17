import React, { Component } from 'react';
import FormEmail from '../FormEmail';
import FormBasics from '../FormBasics';
import FormMedical from '../FormMedicalHistory';
import FormFamily from '../FormFamilyHistory';
import FormTerms from '../FormTerms';
import Summary from './Summary';
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
      formData: {},
      step: 0
    };
  }

  handleBack = () => this.setState({ step: this.state.step - 1 });
  handleContinue = values =>
    this.setState({
      formData: { ...this.state.formData, ...values },
      step: this.state.step + 1
    });
  handleSubmit = values => console.log('payload:', values);

  render() {
    const { formData, step } = this.state;
    return (
      <div className="PatientIngest">
        <div className="PatientIngest__sidebar">
          <ProgressSidebar progress={step} steps={PatientIngestSteps} />
        </div>
        <div className="PatientIngest__form">
          {step > 0 && (
            <p className="PatientIngest__back" onClick={this.handleBack}>
              ← Back
            </p>
          )}
          {step === 0 && (
            <FormEmail formData={formData} onContinue={this.handleContinue} />
          )}
          {step === 1 && (
            <FormBasics formData={formData} onContinue={this.handleContinue} />
          )}
          {step === 2 && (
            <FormMedical formData={formData} onContinue={this.handleContinue} />
          )}
          {step === 3 && (
            <FormFamily formData={formData} onContinue={this.handleContinue} />
          )}
          {step === 4 && (
            <FormTerms formData={formData} onContinue={this.handleContinue} />
          )}
          {step === 5 && (
            <Summary formData={formData} onSubmit={this.handleSubmit} />
          )}
        </div>
      </div>
    );
  }
}

export default PatientIngest;
