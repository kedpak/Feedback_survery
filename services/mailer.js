const sendGrid = require('sendgrid');
const helper = sendGrid.mail;
const keys = require('../config/keys');

// Initialize a Mail class provided by sendgrid library. Add properties to it
// which represents template of survey.
class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    // sendgrid methods
    this.from_email = new helper.Email('no-reply@feedbax.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    // sendgrid method which adds what content to be shown inside email.
    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  // Function maps through recipients array and calls sendGrid function on each email property.
  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  // sendgrid click tracking method.
  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSetting(trackingSettings);
  }

  // Handle adding recipeints for email for sendgrid. 
  addRecipients() {
    const personalize = new helper.Personlization();
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }
}

module.exports = Mailer;
