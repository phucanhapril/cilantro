import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';

import '../../assets/react-toolbox/theme.css';
import './styles.css';

class FormEmail extends Component {
  render() {
    const { error, onBlur, onChange, onContinue, value } = this.props;
    return (
      <div className="FormEmail">
        <Input
          className="FormEmail__input"
          type="email"
          label="Enter your email address to begin"
          value={value}
          onChange={value => onChange('email', value)}
          onBlur={() => onBlur('email', true)}
          error={error}
          required
        />
        <Button
          label="Continue"
          onClick={onContinue}
          disabled={error ? true : false}
          raised
        />
      </div>
    );
  }
}

FormEmail.propTypes = {
  error: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onContinue: PropTypes.func,
  value: PropTypes.string
};

export default FormEmail;
