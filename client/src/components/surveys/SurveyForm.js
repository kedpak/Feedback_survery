import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

const FIELDS = formFields;

// Shows form for user to add comonent.
class SurveyForm extends Component {
  renderFields(){
    return _.map(FIELDS, ({ label, name }) => {
      return <Field component={SurveyField} type="text" label={label} name={name} key={name}/>
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="blue btn-flat left" style={{'color': 'white'}}>
          Cancel
          </ Link>
          <button type="submit" className="black btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

// Validates if field inputs are inputted with correct format.
// Returns error if not.
function validate(values) {
  const errors = {};
  _.each(FIELDS, ({ name, errMsg }) => {
    if (!values[name]) {
      errors[name] = errMsg;
    }
  });
  errors.emails = validateEmails(values.emails || '');
  return errors;
}
// When using redux form, connection to store is done with reduxForm()
export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
