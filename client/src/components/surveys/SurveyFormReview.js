import React from 'react';
import { connect } from 'react-redux';

const SurveyReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <h5>Confirm your entries!</h5>
      
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
