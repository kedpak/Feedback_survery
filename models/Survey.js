const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

// Survey schema for setting up survey, and list of user to send to.
const surveySchema = new Schema ({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0},
  no: { type: Number, default: 0
});

mongoose.model('surveys', surveySchema);
