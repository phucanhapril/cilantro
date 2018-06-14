import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input/Input';

import '../../assets/react-toolbox/theme.css';
import './styles.css';

class FormFamilyHistory extends Component {
  render() {
    return (
      <div className="FormFamilyHistory">
        <Input
          className="FormFamilyHistory__input"
          type="text"
          label="Family history"
          onChange={()=>{}}
        />
      </div>
    );
  }
}

export default FormFamilyHistory;
