const mongoose = require('mongoose');
const { Schema } = mongoose;

// This schema checks if surveyee responded to survey.
// Also handles if surveyee clicks on response more than once.
recipientSchema = new Schema ({
  email: String,
  responded: { type: Boolean, default: false }
});

// Export schema to be used in array of recipients in Survey schema. 
module.exports = recipientSchema;
