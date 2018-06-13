import React, { Component } from 'react';

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
        But soft!
        <div className="PatientIngest__sidebar">
        </div>
        <div className="PatientIngest__form">
        </div>
      </div>
    );
  }
}

export default PatientIngest;
