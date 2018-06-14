import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input/Input';

import '../../assets/react-toolbox/theme.css';
import './styles.css';

class FormMedicalHistory extends Component {
  render() {
    return (
      <div className="FormMedicalHistory">
        <Input
          className="FormMedicalHistory__input"
          type="text"
          label="Medical history"
          onChange={()=>{}}
        />
      </div>
    );
  }
}

export default FormMedicalHistory;
