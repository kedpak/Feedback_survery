const passport = require('passport');
const GoogleStrat = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

// Create new instance of google passport strategy. Allows users to authenticate
// through google.
passport.use(
	new GoogleStrat(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		}, 
		(accessToken, refreshToken, profile, done) => {
			console.log('access token: ', accessToken);
			console.log('refresh token: ', refreshToken);
			console.log('profile: ', profile);
		}
	)
);
