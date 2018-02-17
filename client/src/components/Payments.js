import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Handles stripe payments.
class Payments extends Component {
  render() {

    return (
      <StripeCheckout
        name="Feedbax"
        description="Pay $5 dollars for Credits!"
        amount={500}
        // Callback func which is called when stripe sends back token of amount.
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn" style={{'background-color': 'white', 'color': 'black'}}>
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
