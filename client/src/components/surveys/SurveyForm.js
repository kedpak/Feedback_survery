import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

// Shows form for user to add comonent.
class SurveyForm extends Component {

  renderFields(){
    return (
      <div>
        <Field type="text" name="title" component={SurveyField} />
      </div>
    )
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields}
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
