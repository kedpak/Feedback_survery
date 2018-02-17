const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretkey);

// Posts submitted payment data to api and charges user for credit card payment.
module.exports = app => {
  app.post('/api/stripe', (req, res) => {
    stripe.charges.create({
        amount: 500,
        currency: "usd",
        source: req.body.id, // obtained with Stripe.js
        description: "Charge card for user."
      }, function(err, charge) {
        // asynchronously called
      });
  });
};
