import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';

// Allow user to review their input fields before final submission.
const SurveyReview = ({ onCancel, formValues, submitSurvey}) => {

  const fieldList = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Confirm your entries!</h5>
      {fieldList}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
       >
      Back
      </button>
      <button
      onClick={() => submitSurvey(formValues)}
      className="green white-text btn-flat right"
      >
        Submit Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

// mapStateToProps pulls values out of redux store
const mapStateToProps = (state) => {
  console.log(state);
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(SurveyReview);
