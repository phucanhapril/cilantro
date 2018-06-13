import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input/Input';

import '../../../assets/react-toolbox/theme.css';
import './styles.css';

class FormBasics extends Component {
  render() {
    return (
      <div className="FormBasics">
        <Input
          className="FormBasics__input"
          type="text"
          label="Name"
          onChange={()=>{}} 
        />
      </div>
    );
  }
}

FormBasics.propTypes = {
};

export default FormBasics;
