import React, { Component } from 'react';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
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
      step: 0,
      submitted: false
    };
  }

  handleBack = () => this.setState({ step: this.state.step - 1 });
  handleContinue = values =>
    this.setState({
      formData: { ...this.state.formData, ...values },
      step: this.state.step + 1
    });
  handleSubmit = values => {
    console.log('payload:', values);
    this.setState({ submitted: true });
  }

  render() {
    const { formData, step, submitted } = this.state;
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
          <Dialog
            className="PatientIngest__congrats"
            active={submitted}
            title="Congrats!"
          >
            <p className="PatientIngest__congrats-text">
              Your information has been submitted. As a Cilantro Health member, you'll receive full primary care with unprecedented collaboration with your doctor and health team. Together we'll build a 360º view of your health and create a long-term plan that’s just for you.
            </p>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default PatientIngest;
