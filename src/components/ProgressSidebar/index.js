import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import logo from '../../assets/icon.svg';
import './styles.css';

const ProgressSidebar = ({ progress, steps }) => (
  <div className="ProgressSidebar">
    <div className="ProgressSidebar__content">
      <img
        className="ProgressSidebar__logo"
        src={logo}
        alt="Cilantro Health logo"
      />
      <h1 className="ProgressSidebar__title">Cilantro Health</h1>
      <div className="ProgressSidebar__steps">
        {steps.map((step, i) => (
          <div
            className={classNames('ProgressSidebar__step', {
              'ProgressSidebar__step--active': i === progress
            })}
            key={i}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  </div>
);

ProgressSidebar.propTypes = {
  progress: PropTypes.number,
  steps: PropTypes.array
};

export default ProgressSidebar;
