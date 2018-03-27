const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const checkCredits = require('../middlewares/checkCredits');
const Mailer = require('../services/mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys');

module.exports = app => {
  // Route to thank responder.
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thank you for your input! We are glad you liked our product!');
  });

  app.get('/api/surveys/improvments', (req, res) => {
    res.send('We are sorry you did not like the product! What can we do to improve?');
  })

  app.post('/api/surveys/webhooks', (req, res) => {
    const p = new Path('/api/surveys/:surveyId/:choice');

    const events = _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return {
            email, surveyId: match.surveyId, choice: match.choice
          };
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .value();

    console.log(events);
    res.send({});
  });

  app.post('/api/surveys', requireLogin, checkCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      // Split string at comma and map through all emails. Return new object for each with email prop.
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    // Initialize Mailer with survey arguments and template.
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      // Save survey.
      await survey.save();
      //Deduct one credit from user account, save as async and then send back to browser.
      req.user.userCredits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
