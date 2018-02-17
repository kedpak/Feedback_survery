import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';


// Handles stripe payments.
class Payments extends Component {
  render() {

    return (
      <StripeCheckout
        name="Feedbax"
        description="$5 dollars for 5 email crdits"
        amount={500}
        // Callback func which is called when stripe sends back token of amount.
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn" style={{'background-color': 'white', 'color': 'black'}}>
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default Payments;
