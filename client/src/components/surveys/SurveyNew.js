import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

// SurveyNew displays the Survey Form and and the review of survey.
class SurveyNew extends Component {
  state = {
    showReview: false
  };

  renderContent() {
    if (this.state.showReview) {
      return (<SurveyFormReview
        onCancel={() => this.setState({ showFormReview: false})}
      />);
    }
    return <SurveyForm onSurveySubmit={() => this.setState({showReview: true })}/>
}

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default SurveyNew;
