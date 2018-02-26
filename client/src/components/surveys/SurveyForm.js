import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const FIELDS = [
  { label: 'Survey Title', name: 'title'},
  { label: 'Subject line', name: 'subject'},
  { label: 'Email Body', name: 'body'},
  { label: 'Recipient List', name: 'emails'}
];
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
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

  if (!values.title) {
    errors.title = 'Please provide a title!';

  }
  return errors;
}
// When using redux form, connection to store is done with reduxForm()
export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
