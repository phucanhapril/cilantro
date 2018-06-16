import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import Button from 'react-toolbox/lib/button/Button';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';
import CreatableSelect from 'react-select/lib/Creatable';
import Input from 'react-toolbox/lib/input/Input';
import Switch from 'react-toolbox/lib/switch/Switch';
import { Defaults } from '../../utils';

import './styles.css';

const FormMedicalHistory = ({ formData, onContinue, submitForm }) => (
  <Formik
    className="FormMedicalHistory"
    initialValues={formData}
    onSubmit={onContinue}
    render={({
      values,
      errors,
      touched,
      dirty,
      setFieldValue,
      setFieldTouched
    }) => {
      return (
        <form>
          <p className="FormMedicalHistory__label">Medical conditions</p>
          <div className="FormMedicalHistory__conditions">
            {Defaults.conditions.sort().map(condition =>
              <Checkbox
                key={condition}
                className="FormMedicalHistory__condition-checkbox"
                label={condition}
                checked={values.conditions.includes(condition)}
                onChange={value => {
                  if (value && !values.conditions.includes(condition)) {
                    setFieldValue(
                      'conditions', [...values.conditions, condition]
                    );
                  } else if (!value) {
                    setFieldValue(
                      'conditions',
                      values.conditions.filter(c => c!== condition)
                    );
                  }
                }}
              />
            )}
          </div>

          <p className="FormMedicalHistory__label FormMedicalHistory__label--with-sublabel">
            Medications and allergies
          </p>
          <p className="FormMedicalHistory__sublabel">
            Please list any medications you are currently taking including non-prescription medications, vitamins, and supplements.
          </p>
          <CreatableSelect
            className="FormMedicalHistory__multiselect"
            value={values.medications.map(m => ({ value: m, label: m }))}
            options={Defaults.commonMeds}
            onChange={value =>
              setFieldValue('medications', value.map(m => m.value))
            }
            isMulti
            menuPlacement={'auto'}
          />
          <Input
            className="FormMedicalHistory__input"
            label="List medication allergies or reactions"
            value={values.allergies}
            onChange={value => setFieldValue('allergies', value)}
            multiline
          />

          <p className="FormMedicalHistory__label FormMedicalHistory__label--with-sublabel">
            Surgeries and hospitalizations
          </p>
          <p className="FormMedicalHistory__sublabel">
            List any surgeries or hospital stays you have had and their approximate date/year.
          </p>
          <Input
            className="FormMedicalHistory__input"
            value={values.operations}
            onChange={value => setFieldValue('operations', value)}
            multiline
          />

          <p className="FormMedicalHistory__label">Lifestyle</p>
          <div className="FormMedicalHistory__habits">
            {Defaults.habits.map((habit, i) =>
              <div
                className="FormMedicalHistory__habit"
                key={`habit-${habit.name}`}
              >
                <Switch
                  className="FormMedicalHistory__habit-switch"
                  label={habit.question}
                  checked={Object.keys(values.habits).includes(habit.name)}
                  onChange={value => {
                    if (value) {
                      setFieldValue(
                        'habits',
                        { ...values.habits, [habit.name]: Defaults.habitFreq}
                      );
                    } else {
                      let {[habit.name]: o, ...updatedHabits} = values.habits;
                      setFieldValue('habits', updatedHabits);
                    }
                  }}
                />
                {Object.keys(values.habits).includes(habit.name) && (
                  <Input
                    className="FormMedicalHistory__habit-input"
                    label="How much and how often?"
                    value={
                      values.habits[habit.name] !== Defaults.habitFreq
                      ? values.habits[habit.name]
                      : ''
                    }
                    onChange={value => {
                      if (value.trim()) {
                        setFieldValue(
                          'habits', { ...values.habits, [habit.name]: value }
                        );
                      } else {
                        setFieldValue(
                          'habits',
                          { ...values.habits, [habit.name]: Defaults.habitFreq}
                        );
                      }
                    }}
                  />
                )}
              </div>
            )}
          </div>

          <Button
            label={submitForm ? 'Submit' : 'Continue'}
            onClick={() => onContinue(values)}
            raised
          />
        </form>
      );
    }}
  />
);

FormMedicalHistory.propTypes = {
  formData: PropTypes.object,
  onContinue: PropTypes.func,
  submitForm: PropTypes.bool
};

export default FormMedicalHistory;
