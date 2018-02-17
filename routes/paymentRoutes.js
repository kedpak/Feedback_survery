const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretkey);
const requireLogin = require('../middlewares/requireLogin');

// Posts submitted payment data to api and charges user for credit card payment.
module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // Create charge payment.
    const charge = await stripe.charges.create({
        amount: 500,
        currency: "usd",
        source: req.body.id, // obtained with Stripe.js
        description: "Charge card for user."
      });
      // Adds 5 credits to userCredits property for return User object.
      req.user.userCredits += 5;
      // Save is async so after save is complete, updated user model is returned.
      const user = await req.user.save();

      res.send(user);
  });
};
