const sendGrid = require('sendgrid');
const helper = sendGrid.mail;
const keys = require('../config/keys');

// Initialize a Mail class provided by sendgrid library. Add properties to it
// which represents template of survey.
class Mailer extends helper.Mail {

}

module.exports = Mailer;
