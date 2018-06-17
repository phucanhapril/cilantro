import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Button from 'react-toolbox/lib/button/Button';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';
import { Defaults } from '../../utils';

import './styles.css';

const FormFamilyHistory = ({ formData, onContinue, submitForm }) => (
  <Formik
    className="FormFamilyHistory"
    initialValues={{ familyHistory: formData.familyHistory || {} }}
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
          <p className="FormFamilyHistory__label">Family medical history</p>
          <p className="FormFamilyHistory__sublabel">
            Please select any medical conditions that a family member has
            experienced.
          </p>
          <div className="FormFamilyHistory__conditions">
            {Defaults.conditions.sort().map(c => (
              <div className="FormFamilyHistory__condition" key={c}>
                <Checkbox
                  className="FormFamilyHistory__condition-checkbox"
                  label={c}
                  checked={Object.keys(values.familyHistory).includes(c)}
                  onChange={value => {
                    if (value) {
                      setFieldValue('familyHistory', {
                        ...values.familyHistory,
                        [c]: []
                      });
                    } else {
                      let {
                        [c]: old,
                        ...updatedHistory
                      } = values.familyHistory;
                      setFieldValue('familyHistory', updatedHistory);
                    }
                  }}
                />
                {Object.keys(values.familyHistory).includes(c) && (
                  <div className="FormFamilyHistory__family">
                    {Defaults.familyMembers.map(fam => (
                      <Checkbox
                        key={`${c}-${fam.value}`}
                        className="FormFamilyHistory__family-checkbox"
                        label={fam.label}
                        checked={values.familyHistory[c].includes(fam.value)}
                        onChange={value => {
                          if (value) {
                            setFieldValue('familyHistory', {
                              ...values.familyHistory,
                              [c]: [...values.familyHistory[c], fam.value]
                            });
                          } else {
                            setFieldValue('familyHistory', {
                              ...values.familyHistory,
                              [c]: values.familyHistory[c].filter(
                                f => f !== fam.value
                              )
                            });
                          }
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
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

FormFamilyHistory.propTypes = {
  formData: PropTypes.object,
  onContinue: PropTypes.func,
  submitForm: PropTypes.bool
};

export default FormFamilyHistory;
