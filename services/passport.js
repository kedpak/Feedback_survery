const passport = require('passport');
const GoogleStrat = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

// A mongoose model class with users collection.
const User = mongoose.model('users');

// Turn mongoose model into cookie. Take id of model, and send cookie to user.
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// Take cookie and turn it back into mongoose model.
passport.deserializeUser((id, done) => {
	User.findById(id)
		.then(user => {
			done(null, user);
		});
});

// Create new instance of google passport strategy. Allows users to authenticate
// through google.
passport.use(
	new GoogleStrat(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		// Callback gets called when user profile is sent back to user from google.
		// Creats new User mongoose instance and saves google id inside db.
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id})
					if (existingUser) {
						// If user exists.
						console.log('User already exists');
						done(null, existingUser);
					}
					else {
						// If user does not exist, create New user.
						const user = await new User({ googleId: profile.id}).save()
						done(null, user);
					}
		}
	)
);
