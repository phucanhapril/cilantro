import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-toolbox/lib/button/Button';
import { Defaults, StringUtils } from '../../../utils';
import './styles.css';

const PatientIngestSummary = ({ formData, onSubmit }) => (
  <div className="PatientIngestSummary">
    <h1 className="PatientIngestSummary__title">Summary</h1>
    <p className="PatientIngestSummary__sublabel">
      Review your answers before submitting.
    </p>

    <p className="PatientIngestSummary__label">Basics</p>
    <div className="PatientIngestSummary__data-review">
      {`${formData.firstName} ${formData.lastName}`}
      <br />
      {`Born ${formData.dobMonth}/${formData.dobDay}/${formData.dobYear}`}
      <br />
      {`${StringUtils.ucFirst(formData.gender)}, ${StringUtils.ucFirst(
        formData.maritalStatus
      )}`}
      <br />
      {`${formData.address}`}
      <br />
      {`${formData.city}, ${formData.state} ${formData.zipcode}`}
      <br />
      {`${formData.phone}`}
      <br />
      {`${formData.email}`}
    </div>

    <p className="PatientIngestSummary__label">Medical history</p>
    <div className="PatientIngestSummary__data-review">
      {`Medical conditions: ${
        formData.conditions.length ? formData.conditions.join(', ') : 'none'
      }`}
      <br />
      {`Medications: ${
        formData.medications.length ? formData.medications.join(', ') : 'none'
      }`}
      <br />
      {`Allergies: ${formData.allergies ? formData.allergies : 'none'}`}
      <br />
      {`Surgeries/hospitalizations: ${
        formData.operations ? formData.operations : 'none'
      }`}
      <br />
      {`Medications: ${
        formData.medications.length ? formData.medications.join(', ') : 'none'
      }`}
      <br />
      {`Lifestyle/habits: ${Defaults.habits.map(
        h =>
          ` ${StringUtils.ucFirst(h.name)} (${formData.habits[h.name] ||
            'none'})`
      )}`}
      <br />
    </div>

    <p className="PatientIngestSummary__label">Family history</p>
    <div className="PatientIngestSummary__data-review">
      {Object.keys(formData.familyHistory).length
        ? Object.keys(formData.familyHistory).map(condition => (
            <p
              className="PatientIngestSummary__family-condition"
              key={condition}
            >
              {`${StringUtils.ucFirst(condition)}:
              ${formData.familyHistory[condition].map(
                fam => ` ${StringUtils.ucFirst(fam)}`
              )}`}
            </p>
          ))
        : 'No history of medical conditions'}
    </div>

    <Button
      className="PatientIngestSummary__submit-button"
      label="Submit"
      onClick={() => this.onSubmit(formData)}
      raised
    />
  </div>
);

PatientIngestSummary.propTypes = {
  formData: PropTypes.object,
  onSubmit: PropTypes.func
};

export default PatientIngestSummary;
