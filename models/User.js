const mongoose = require('mongoose');
const { Schema } = mongoose;


// Properties for users collection
const userSchema = new Schema ({
  googleId: String,
  userCredits: Number
});

// Create new collection called users
mongoose.model('users', userSchema);
