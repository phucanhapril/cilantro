import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';

import FormEmail from '../FormEmail';
import FormBasics from '../FormBasics';
import FormMedicalHistory from '../FormMedicalHistory';
import FormFamilyHistory from '../FormFamilyHistory';
import FormTerms from '../FormTerms';
import FormSummary from '../FormSummary';
import ProgressSidebar from '../ProgressSidebar';

import '../../../assets/react-toolbox/theme.css';
import './styles.css';

class PatientIngest extends Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0 };
  }
  
  render() {
    const { progress } = this.state;
    const steps = [
      'Email',
      'Basics',
      'Medical History',
      'Family History',
      'Terms',
      'Summary'
    ];
    return (
      <div className="PatientIngest">
        <div className="PatientIngest__sidebar">
          <ProgressSidebar progress={progress} steps={steps} />
        </div>
        <div className="PatientIngest__form">
          { progress === 0 && <FormEmail /> }
          { progress === 1 && <FormBasics /> }
          { progress === 2 && <FormMedicalHistory /> }
          { progress === 3 && <FormFamilyHistory /> }
          { progress === 4 && <FormTerms /> }
          { progress === 5 && <FormSummary /> }
          <Button 
            className="PatientIngest__continue"
            label='Continue'
            onClick={() => this.setState({ progress: progress + 1 })}
            raised
            neutral
          />
        </div>
      </div>
    );
  }
}

export default PatientIngest;
