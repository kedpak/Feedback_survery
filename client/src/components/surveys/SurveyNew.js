import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

// SurveyNew displays the Survey Form and and the review of survey.
class SurveyNew extends Component {
  state = {
    showReview: false
  };

  // Render form if showReview is false. Otherwise show survey form. 
  renderContent() {
    if (this.state.showReview) {
      return (<SurveyFormReview
        onCancel={() => this.setState({ showReview: false})}
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
