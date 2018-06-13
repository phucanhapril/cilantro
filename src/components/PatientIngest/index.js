import React, { Component } from 'react';
import ProgressSidebar from '../ProgressSidebar';

import '../../../assets/react-toolbox/theme.css';
import './styles.css';

class PatientIngest extends Component {
  constructor(props) {
    super(props);
    this.state = { progress: 4 };
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
        </div>
      </div>
    );
  }
}

export default PatientIngest;
