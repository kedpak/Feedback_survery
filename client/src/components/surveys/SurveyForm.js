import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// When using redux form, connection to store is done with reduxForm()
export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
