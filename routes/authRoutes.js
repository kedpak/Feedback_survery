const passport = require('passport'); // Importing passport module.

module.exports = app => {
	// Route which initiates passport and tells to use google strategy.
	app.get('/auth/google', passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	// Route which exchanges code to recieve user profile. Puts user on hold until request is sent. 
	app.get('/auth/google/callback', passport.authenticate('google'));
};



