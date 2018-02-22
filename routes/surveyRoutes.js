const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const checkCredits = require('../middlewares/checkCredits');
const Mailer = require('../services/mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys');

module.exports = app => {
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
    await mailer.send();
  });
};
