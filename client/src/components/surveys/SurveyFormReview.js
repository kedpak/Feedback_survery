import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';

const SurveyReview = ({ onCancel, formValues }) => {

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
        className="yellow darken-3 btn-flat"
        onClick={onCancel}
       >
      Back
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

export default connect(mapStateToProps)(SurveyReview);
