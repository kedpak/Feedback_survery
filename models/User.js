const mongoose = require('mongoose');
const { Schema } = mongoose;


// Properties for users collection
const userSchema = new Schema ({
  googleId: String,
  userCredits: {
    type: Number,
    default: 0
  }
});

// Create new collection called users
mongoose.model('users', userSchema);
