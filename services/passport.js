const passport = require('passport');
const GoogleStrat = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

// A mongoose model class with users collection
const User = mongoose.model('users');

// Create new instance of google passport strategy. Allows users to authenticate
// through google.
passport.use(
	new GoogleStrat(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		// Callback gets called when user profile is sent back to user from google.
		// Creats new User mongoose instance and saves google id inside db
		(accessToken, refreshToken, profile, done) => {
			new User({ googleId: profile.id}).save();
		}
	)
);
