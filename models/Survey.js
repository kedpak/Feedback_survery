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
  no: { type: Number, default: 0},
  _user: { type: Schema.Types.ObjectId, ref: 'User'} // every survey belongs to a specific user. type is id of User this record belongs to. 
});

mongoose.model('surveys', surveySchema);
