import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input/Input';

import '../../../assets/react-toolbox/theme.css';
import './styles.css';

class FormEmail extends Component {
  
  render() {
    return (
      <div className="FormEmail">
        <Input
          className="FormEmail__input"
          type="email"
          label="Enter your email address to begin"
          onChange={()=>{}} 
        />
      </div>
    );
  }
}

FormEmail.propTypes = {
  index: PropTypes.number,
  length: PropTypes.number
};

export default FormEmail;
