const express = require('express');
const passport = require('passport');
const GoogleStrat = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();


// Create new instance of google passport strategy. Allows users to authenticate
// through google.
passport.use(
	new GoogleStrat(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		}, 
		accessToken => {
			console.log(accessToken);
		}
	)
);


// Route which initiates passport and tells to use google strategy.
app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email']
	})
);


// Use port provided by Heroku or use port 5000
app.listen(process.env.PORT || 5000, "0.0.0.0", function() {
	console.log("Listening on Port");
});
