import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../assets/react-toolbox/theme.css';
import './styles.css';

class FormSummary extends Component {
  
  render() {
    return (
      <div className="FormSummary">
        <h1 className="FormSummary__title">Summary</h1>
      </div>
    );
  }
}

FormSummary.propTypes = {
};

export default FormSummary;
